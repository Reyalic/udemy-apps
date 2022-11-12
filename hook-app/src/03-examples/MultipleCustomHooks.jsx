import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingQuote, Quote} from './index'

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)
    const { data, isLoading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0]

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {
            isLoading ? 
            <LoadingQuote />
            : 
            <Quote author={author} quote={quote} /> 
        }
        <button 
            className='btn btn-primary'
            disabled={isLoading}
            onClick={ () => increment() }>
            Next Quote
        </button>
    </>
  )
}

export default MultipleCustomHooks