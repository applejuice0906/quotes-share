import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

type Props = {
  quotes: {
    id: string;
    author: string;
    text: string;
  }[];
};

const QuoteList: React.VFC<Props> = ({ quotes }) => {
  return (
    <>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
