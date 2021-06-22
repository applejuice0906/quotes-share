import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

type Props = {
  quotes: {
    id: string;
    author: string;
    text: string;
    comments: {
      id: string;
      text: string;
    }[];
  }[];
};

const QuoteDetails: React.VFC<Props> = ({ quotes }) => {
  const { quoteId } = useParams<{ quoteId?: string }>();
  const match = useRouteMatch();

  const quote = quotes.find((quote) => quote.id === quoteId);

  if (!quote) return <h1 className="centered">No quote found... 🐣</h1>;

  return (
    <>
      <HighlightedQuote text={quote!.text} author={quote!.author} />
      <Route exact path={match.path}>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments 💬
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments comments={quote.comments} />
      </Route>
    </>
  );
};

export default QuoteDetails;
