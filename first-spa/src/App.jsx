import { Navigate, Route, Routes, Link } from 'react-router-dom';

import Layout from './components/layout/Layout';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetails from './pages/QuoteDetails';
import Quotes from './pages/Quotes';
import Comments from './components/comments/Comments';

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path={'/'}
          element={<Navigate to={'/quotes'} />}
        />
        <Route
          path={'/quotes'}
          element={<Quotes />}
        />
        <Route
          path={'/quotes/:quoteId/*'}
          element={<QuoteDetails />}
        >
          <Route
            path={``}
            element={
              <div className={'centered'}>
                <Link className={'btn--flat'} to={`comments`}>Load Comments</Link>
              </div>
            }
          />
          <Route
            path={`comments`}
            element={<Comments />}
          />
        </Route>
        <Route
          path={'/new-quote'}
          element={<NewQuote />}
        />
        <Route
          path={'*'}
          element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
