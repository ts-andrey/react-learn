import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import NewQuote from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';
import Quotes from './pages/Quotes';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={'/'} exact>
          <Redirect to={'/quotes'} />
        </Route>

        <Route path={'/quotes'} exact>
          <Quotes />
        </Route>

        <Route path={'/quotes/:quoteId'}>
          <QuoteDetails />
        </Route>

        <Route path={'/new-quote'}>
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
