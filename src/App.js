import React, { useState } from 'react'
import TabButton from './components/childrentandfwdprops/TabButton'

function App() {
  const [section ,setSection ]=useState("I am bottom section")
  function handleClick(optionSelected){
    setSection(optionSelected)
  }
  return (
    <>
    <div>
      <h1>Hello this is children comp</h1>
      <TabButton onSelect={()=>handleClick("componenet")}>components</TabButton>
      <TabButton onSelect={()=>handleClick("JSX")}>JSX</TabButton>
      <TabButton onSelect={()=>handleClick("IMG")}>IMG</TabButton>
    </div>
    {section}
    </>
  )
}

export default App