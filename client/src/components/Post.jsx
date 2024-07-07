import classes from './Post.module.css';
import { Link } from 'react-router-dom'

function Post({ author, body, id }) {
  return (
    <>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
      <div className={classes.buttonContainer}>
        <button className={classes.button}>
          <Link style={{color: 'white', fontWeight: '500'}} to={`${id}/edit`}>Edit</Link>
        </button>
        <button className={classes.button}>
          <Link style={{color: 'white', fontWeight: '500'}} to={`${id}/delete`}>Delete</Link>
        </button>
      </div>     
    </>
);
}

export default Post;
