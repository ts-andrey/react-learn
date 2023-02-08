import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onCancel, onSubmit }) {
  const [postBody, setPostBody] = useState('');
  const [postAuthor, setPostAuthor] = useState('')

  function changePostBodyHandler(event) {
    setPostBody(event.target.value)
  }

  function changePostAuthorHandler(event) {
    setPostAuthor(event.target.value)
  }

  function createPost(event) {
    event.preventDefault();
    onSubmit({ author: postAuthor, text: postBody })
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={createPost}>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={changePostAuthorHandler} />
      </p>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' rows='3' required onChange={changePostBodyHandler} />
      </p>
      <div className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default NewPost;