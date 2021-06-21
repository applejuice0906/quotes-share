import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote: React.VFC = () => {
  const history = useHistory();

  const handleAddQuote = (quoteData: { author: string; text: string }) => {
    history.push("/quotes");
  };

  return (
    <div>
      <QuoteForm onAddQuote={handleAddQuote} />
    </div>
  );
};

export default NewQuote;
