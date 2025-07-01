import React, { useReducer } from 'react'

type CounterState = {
  count: number
}

const initialState = {
  count: 0
} as CounterState
// type CounterAction = {
//   // type: string
//   type: 'increment' | 'decrement' | reset
//   payload?: number
// }

type UpdateAction = {
  type: 'increment' | 'decrement'
  payload: number
}

type ResetAction = {
  type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
    default:
      throw new Error()
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>+10</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>-10</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}
