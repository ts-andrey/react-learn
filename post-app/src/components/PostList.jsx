import classes from './PostList.module.css';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';

function PostList() {
  const posts = useLoaderData();

  let postsContent;
  if (posts.length > 0) {
    postsContent = (
      <ul className={classes['post-list']}>
        {posts.map((post, index) => <Post key={post.id || index} id={post.id} author={post.author} content={post.content} />)}
      </ul>
    )
  }
  if (posts.length === 0) {
    postsContent = (
      <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
        <h3>There is no posts yet</h3>
        <p>Try to add one</p>
      </div>
    )
  }

  return (
    <>
      {postsContent}
    </>
  )
}

export default PostList;