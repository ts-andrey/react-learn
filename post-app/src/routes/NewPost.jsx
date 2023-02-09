import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {


  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' name='author' required />
        </p>
        <p>
          <label htmlFor='content'>Text</label>
          <textarea id='content' rows='3' name='content' required />
        </p>
        <div className={classes.actions}>
          <Link to={'..'}>Cancel</Link>
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const newPostData = Object.fromEntries(formData);
  newPostData.id = Math.random().toString();

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(newPostData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return redirect('/');
}