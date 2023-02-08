import classes from './PostList.module.css';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
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