import QuoteList from "../components/quotes/QuoteList";

type Props = {
  quotes: {
    id: string;
    author: string;
    text: string;
  }[];
};

const AllQuotes: React.VFC<Props> = ({ quotes }) => {
  return (
    <div>
      <QuoteList quotes={quotes} />
    </div>
  );
};

export default AllQuotes;
