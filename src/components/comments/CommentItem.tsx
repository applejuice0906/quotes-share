import classes from "./CommentItem.module.css";

const CommentItem: React.VFC<{ text: string }> = ({ text }) => {
  return (
    <li className={classes.item}>
      <p>{text}</p>
    </li>
  );
};

export default CommentItem;
