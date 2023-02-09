import classes from './PostList.module.css';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function onCreatePost(newPost) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPosts(oldPosts => [newPost, ...oldPosts]);
  }

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onSubmit={onCreatePost} />
      </Modal>
    )
  }
  let postContent;
  if (posts.length > 0) {
    postContent =
      (
        <ul className={classes['post-list']}>
          {posts.map((el, index) => <Post key={el.id || index} author={el.author} content={el.content} />)}
        </ul>
      )
  } else {
    postContent =
      (
        <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
          <h3>There is no posts yet</h3>
          <p>Try to add one</p>
        </div>
      )
  }

  return (
    <>
      {modalContent}
      {postContent}
    </>
  )
}

export default PostList;