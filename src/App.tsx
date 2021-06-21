import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes" component={AllQuotes} />
          <Route path="/quotes/:quoteId" component={QuoteDetails} />
          <Route path="/new-quote" component={NewQuote} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
