import React from 'react'
import { decrement, increment } from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
      <h1>{count}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter