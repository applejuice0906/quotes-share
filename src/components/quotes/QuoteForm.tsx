import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import Loading from "../UI/Loading";
import classes from "./QuoteForm.module.css";

type Props = {
  onAddQuote: (quoteData: { author: string; text: string }) => void;
  isLoading?: boolean;
};

const QuoteForm: React.VFC<Props> = ({ onAddQuote, isLoading }) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  function submitFormHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredAuthor = authorInputRef.current!.value;
    const enteredText = textInputRef.current!.value;

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <>
      <Prompt
        when={isEntering}
        message="Are you sure you want to leave the page?"
      />
      <Card>
        <form
          onFocus={() => setIsEntering(true)}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {isLoading && (
            <div className={classes.loading}>
              <Loading />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">👨‍💻Author</label>
            <input required type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">✏️Text</label>
            <textarea required id="text" rows={5} ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={() => setIsEntering(false)} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
