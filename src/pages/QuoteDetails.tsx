import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  {
    id: "q2",
    author: "Thomas",
    text: "Learning something is great!",
  },
];

const QuoteDetails: React.VFC = () => {
  const { quoteId } = useParams<{ quoteId?: string }>();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) return <h1 className="centered">No quote found... 🐣</h1>;

  return (
    <>
      <HighlightedQuote text={quote!.text} author={quote!.author} />
      <Route path="/quotes/:quoteId/comments" component={Comments} />
    </>
  );
};

export default QuoteDetails;
