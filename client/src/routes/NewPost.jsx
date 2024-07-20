import Modal from '../components/Modal.jsx';
import { Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import { Link } from 'react-router-dom';

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' required rows={3}/>
        </p>
        <p>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' name='author' required /> 
        </p>
        <p className={classes.actions}>
          <Link style={{color: '#23014a', marginRight: '1rem'}} to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}
export default NewPost;

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const response = await fetch('https://custom-task-notes-react-application.onrender.com/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    if(!response.ok) {
      throw new Error({
        name: 'Error',
        message: 'Failed to post your New Post'
      });
    } 

    return redirect('/');
} catch (error) {
    return { error: error.message };
}
};