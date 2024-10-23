import React, { useEffect, useReducer } from 'react'
import { CounterReducer,INIT_STATE } from './CounterReducer'
import { type } from '@testing-library/user-event/dist/type'

function Counter() {
  const[state,dispatch]=useReducer(CounterReducer,INIT_STATE)
  async function fetchData(){
    dispatch({type:"FETCH_START"})
    try {
      let response = await fetch("https://fakestoreapi.com/products")
      let result= await response.json()
      dispatch({type:"FETCH_SUCCESS",payload:result})
      // console.log(result)
    } catch (error) {
      dispatch({type:"FETCH_FAILED"})
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(state)
  
  return (
    <div>
      {state.loading && <h1>Loading</h1>}
      {state.error && <h1>Failed to fetch</h1>}
      {state.data.length>0 && state.data.map((item,idx)=>(
        <p key={idx}>{item.title}</p>
))}

    </div>
  )
}

export default Counter