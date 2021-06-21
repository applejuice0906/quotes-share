import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetails: React.VFC = () => {
  const { quoteId } = useParams<{ quoteId?: string }>();

  return (
    <>
      <h1>Quote Details Page</h1>
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comments" component={Comments} />
    </>
  );
};

export default QuoteDetails;
