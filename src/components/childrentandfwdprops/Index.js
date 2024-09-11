import React,{useState} from 'react'
import { EXAMPLES } from './data'
import TabButton from "./TabButton"

function Index() {
    const [section ,setSection ]=useState("components")
    function handleClick(optionSelected){
      setSection(optionSelected)
      
    }
    console.log(section)
    return (
      <>
      <div>
        <h1>Hello this is children comp</h1>
        <TabButton onSelect={()=>handleClick("components")}>components</TabButton>
        <TabButton onSelect={()=>handleClick("JSX")}>JSX</TabButton>
        <TabButton onSelect={()=>handleClick("IMG")}>IMG</TabButton>
      </div>
      <div>
        <h3>{EXAMPLES[section].title}</h3>
        <p>{EXAMPLES[section].description}</p>
        <pre>
          <code>
            {EXAMPLES[section].code}
          </code>
        </pre>
      </div>
      </>
    )
  }

export default Index