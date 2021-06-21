import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import MainHeader from "./components/layout/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes" component={AllQuotes} />
          <Route path="/quotes/:quoteId" component={QuoteDetails} />
          <Route path="/new-quote" component={NewQuote} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
