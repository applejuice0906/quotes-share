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
      <h2>All Comments ☘️</h2>
      {!isAddingComment && (
        <button className="btn--flat" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewComment />}
    </section>
  );
};

export default Comments;
