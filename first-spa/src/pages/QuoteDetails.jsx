import { Fragment, useEffect } from 'react';
import { useParams, useRouteMatch, Outlet } from 'react-router-dom';


import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetails = () => {
  const params = useParams();
  // const match = useRouteMatch();

  const { quoteId } = params;
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])


  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <p className="centered">{error}</p>
    )
  }

  console.log(loadedQuote);

  if (!loadedQuote.id) {
    return (
      <p>No quote was found.</p>
    )
  }

  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Outlet />
    </Fragment>
  )
}

export default QuoteDetails;