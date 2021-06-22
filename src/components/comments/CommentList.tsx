import CommentItem from "./CommentItem";
import classes from "./CommentList.module.css";

const CommentList: React.VFC<{
  comments: { id: string; text: string }[];
}> = ({ comments }) => {
  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentList;
