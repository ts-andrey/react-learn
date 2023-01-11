import { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DEFAULT_QUOTES = [
  { id: 'q0', author: 'q0_author', text: 'zero quote text' },
  { id: 'q1', author: 'q1_author', text: 'first quote text' },
]

const QuoteDetails = () => {
  const params = useParams();

  const quote = DEFAULT_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <p>No quote was found.</p>
    )
  }

  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetails;