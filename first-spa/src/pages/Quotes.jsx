import QuoteList from '../components/quotes/QuoteList';

const DEFAULT_QUOTES = [
  { id: 'q0', author: 'q0_author', text: 'zero quote text' },
  { id: 'q1', author: 'q1_author', text: 'first quote text' },
]

const Quotes = () => {
  return (
    <QuoteList quotes={DEFAULT_QUOTES} />
  )
}

export default Quotes;