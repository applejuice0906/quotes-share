import { useState } from "react";

import classes from "./Comments.module.css";
import NewComment from "./NewComment";

const Comments: React.VFC = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewComment />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
