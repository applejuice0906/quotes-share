import { useRef } from "react";

import classes from "./NewComment.module.css";

const NewComment: React.VFC = () => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        {/* <label htmlFor="comment">Your Comment</label> */}
        <textarea
          placeholder="Type your comment here..."
          id="comment"
          rows={2}
          ref={commentTextRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn--flat">Add Comment</button>
      </div>
    </form>
  );
};

export default NewComment;
