import React from 'react'
import "./tabbutton.css"
function TabButton({children,onSelect,isSelected}) {
  console.log(isSelected)
  return (
        <li>

            <button className={isSelected?"active":undefined} onClick={onSelect}>{children}</button>
        </li>
    
  )
}

export default TabButton                    
