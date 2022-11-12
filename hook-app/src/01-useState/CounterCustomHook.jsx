import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterCustomHook = () => {

    //Se desestructura un objeto por que es lo que recibe el return del hook
    const { counter, increment, decrement, reset } = useCounter()
  return (
    <>
        <h1>Counter with hook: {counter}</h1>
        <hr />
        <button onClick={ () => increment (2) } className='btn btn-success'>+1</button>
        <button onClick={reset} className='btn btn-success'>Reset</button>
        <button onClick={ () => decrement (2) } className='btn btn-success'>-1</button>
    </>
  )
}

export default CounterCustomHook