import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote: React.VFC = () => {
  const handleAddQuote = (quoteData: { author: string; text: string }) => {
    console.log(quoteData);
  };

  return (
    <div>
      <QuoteForm onAddQuote={handleAddQuote} />
    </div>
  );
};

export default NewQuote;
