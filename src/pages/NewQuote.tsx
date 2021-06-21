import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

type Props = {
  onNewQuote: (quoteData: { id: string; author: string; text: string }) => void;
};

const NewQuote: React.VFC<Props> = ({ onNewQuote }) => {
  const history = useHistory();

  const handleAddQuote = (quoteData: { author: string; text: string }) => {
    onNewQuote({
      id: Math.random().toString(),
      ...quoteData,
    });
    history.push("/quotes");
  };

  return (
    <div>
      <QuoteForm onAddQuote={handleAddQuote} />
    </div>
  );
};

export default NewQuote;
