import Modal from '../components/Modal.jsx';
import { useNavigation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Form, useParams, redirect, json } from 'react-router-dom';
import classes from './NewPost.module.css';



function EditPost() {
  const params = useParams();
  const id = params.postId;
  const navigation = useNavigation();
  const navigate = useNavigate();

  const isSubmitting = navigation.state === 'submitting';

  const [post , setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch('http://localhost:8080/posts/' + id);
      
      if(!response.ok) {
        throw json({ message: 'Could not fetch post.' })
      }

      const resData = await response.json();

      return setPost(resData);
    }
    fetchPost();
  } , []);

  

  function cancelHandler() {
    navigate('/');
  }


  return (
    <Modal>
      <Form method='patch' className={classes.form}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea 
            id='body' 
            name='body' 
            required 
            defaultValue={post ? post.post.body : ''}
            rows={3} 
          />
        </p>
        <p>
          <label htmlFor='name'>Your Name</label>
          <input 
            type='text' 
            id='name' 
            name='author' 
            defaultValue={post ? post.post.author : ''}
            required 
          /> 
        </p>
        <p className={classes.actions}>
          <button 
            type='button' 
            disabled={isSubmitting} 
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button disabled={isSubmitting}>
            { isSubmitting ? 'Submitting' : 'Save' }
          </button>
        </p>
      </Form>
    </Modal>
  )
}

export default EditPost;



export async function action({ request, params }) {
    const id = params.postId;

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:8080/posts/' + id , {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    if (response.status === 422) {
      return response;
    }
  
    if (!response.ok) {
      throw json({ message: 'Could not edit post.' }, { status: 500 });
    }

    return redirect('/');
};