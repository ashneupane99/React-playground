import React from 'react'
import { useSelector } from 'react-redux'

export const ShowResult = () => {
  const data = useSelector ((state)=> state.data)
  return (
    <div>
     <ul>
      {data.display.map((item)=> (
        <li>{item}</li>
      ))}
     </ul>
    </div>
  )
}
