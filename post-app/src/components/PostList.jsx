import classes from './PostList.module.css';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';

function PostList() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  function hideModalHandler() {
    setIsModalVisible(false);
  }


  let modalContent;
  if (isModalVisible) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost />
      </Modal>
    )
  }

  return ( 
    <>
      {modalContent}
      <ul className={classes['post-list']}>
        <Post author={'Author_1'} body={'SomeText_1'} />
        <Post author={'Author_2'} body={'SomeText_2'} />
      </ul>
    </>
  )
}

export default PostList;