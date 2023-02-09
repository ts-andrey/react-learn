import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onCancel, onSubmit }) {
  const [postAuthor, setPostAuthor] = useState('')
  const [postContent, setPostContent] = useState('');

  function changePostAuthorHandler(event) {
    setPostAuthor(event.target.value)
  }

  function changePostContentHandler(event) {
    setPostContent(event.target.value)
  }

  function createPost(event) {
    event.preventDefault();
    onSubmit({ author: postAuthor, content: postContent })
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={createPost}>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={changePostAuthorHandler} />
      </p>
      <p>
        <label htmlFor='content'>Text</label>
        <textarea id='content' rows='3' required onChange={changePostContentHandler} />
      </p>
      <div className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default NewPost;