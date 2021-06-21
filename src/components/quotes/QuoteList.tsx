import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = <T extends { id: string }>(
  quotes: T[],
  ascending: boolean
) => {
  return quotes.sort((a, b) => {
    if (ascending) return a.id > b.id ? 1 : -1;
    return a.id < b.id ? 1 : -1;
  });
};

type Props = {
  quotes: {
    id: string;
    author: string;
    text: string;
  }[];
};

const QuoteList: React.VFC<Props> = ({ quotes }) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(quotes, isAscending);

  const handleSorting = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isAscending ? "desc" : "asc"}`,
    });
    // history.push("/quotes?sort=" + (isAscending ? "desc" : "asc"));
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={handleSorting}>Sort ✅</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
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
