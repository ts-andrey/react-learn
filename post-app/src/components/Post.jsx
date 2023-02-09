import classes from './Post.module.css';

function Post({ author, content }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{content}</p>
    </li>
  );
}

export default Post