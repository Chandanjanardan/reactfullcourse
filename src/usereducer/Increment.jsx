import React, { useReducer } from 'react'
import { INIT_STATE,IncrementReducer } from './IncrementReducer'


function Increment() {
    const [state,dispatch]=useReducer(IncrementReducer,INIT_STATE)
  return (
    <div>
        <p>count:{state.count}</p>
        <button onClick={()=>dispatch({type:"increment"})}>Incremnet</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </div>
  )
}

export default Increment