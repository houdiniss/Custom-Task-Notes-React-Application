import Modal from "../components/Modal.jsx";
import classes from '../components/Post.module.css';
import { json, useParams, useNavigate } from "react-router-dom";

function DeletePost() {
  const params = useParams();
  const id = params.postId;
  const navigate = useNavigate();

  const deletePost = async () => {
    try {
      const response = await fetch('https://custom-task-notes-react-application.onrender.com/posts/' + id , {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (!response.ok) {
        throw new Error('Could not delete Post');
      }
  
      navigate('/');
    } catch(error) {
      console.log('Error deleteting post: ' , error);
    }
    
  }

  return (
    <Modal>
      <div className={classes.postDelete}>
        <p style={{fontSize: '1.1rem'}}>Are you sure you want to delete this post?</p>
        <div className={classes.buttonContainer}>
          <button 
            className={classes.button} 
            onClick={deletePost}
          >
            Yes
            </button>
          <button className={classes.button}>No</button>
        </div>
      </div> 
    </Modal>
  )
}

export default DeletePost;