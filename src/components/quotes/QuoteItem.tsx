import { Link } from "react-router-dom";

import classes from "./QuoteItem.module.css";

type Props = {
  id: string;
  author: string;
  text: string;
};

const QuoteItem: React.VFC<Props> = ({ id, author, text }) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${id}`}>
        See Details
      </Link>
    </li>
  );
};

export default QuoteItem;
