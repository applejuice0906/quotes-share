import { useState } from "react";

import classes from "./Comments.module.css";
import NewComment from "./NewComment";
import CommentList from "./CommentList";

type Props = {
  comments: {
    id: string;
    text: string;
  }[];
};

const Comments: React.VFC<Props> = ({ comments }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const handleSubmitComment = (comment: { id: string; text: string }) => {
    setIsAddingComment(false);
  };

  return (
    <section className={classes.comments}>
      <h2>All Comments ☘️</h2>
      {!isAddingComment && (
        <button className="btn--flat" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewComment onSubmitComment={handleSubmitComment} />}
      <CommentList comments={comments} />
    </section>
  );
};

export default Comments;
