import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

const DUMMY_QUOTES = [
  {
    id: Math.random().toString(),
    author: 'Max',
    text: 'Learning React is fun!',
    comments: [
      {
        id: Math.random().toString(),
        text: 'Nice Quote!',
      },
      {
        id: Math.random().toString(),
        text: 'Love it!',
      },
    ],
  },
  {
    id: Math.random().toString(),
    author: 'Thomas',
    text: 'Learning something is great!',
    comments: [
      {
        id: Math.random().toString(),
        text: "That's so true!",
      },
    ],
  },
];

function App() {
  const [quotes, setQuotes] = useState(DUMMY_QUOTES);

  const handleNewQuote = (quoteData: typeof DUMMY_QUOTES[number]) => {
    setQuotes((prev) => [...prev, quoteData]);
  };

  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/quotes' />
          </Route>
          <Route exact path='/quotes'>
            <AllQuotes quotes={quotes} />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetails quotes={quotes} />
          </Route>
          <Route path='/new-quote'>
            <NewQuote onNewQuote={handleNewQuote} />
          </Route>
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
