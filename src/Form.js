import React from 'react'
import { RealData } from './RealData'
import {useState} from 'react'

export const Form = ({func}) => {
    const [str, setStr] = useState("")
 
    const handleOnChange = (e)=>{
        const {name, value} = e.target
        // console.log(name, value)
        setStr(value)
    } 
    
    const handleOnSubmit = (e)=> {
        const {name, value} = e.target
        e.preventDefault()
        func(str)
    }
  return (
    <div>
        <RealData data={str}/>
        <form action="" onSubmit = {handleOnSubmit}>
            <input name ="name" type="text" onChange ={handleOnChange} />
            <button>Submit</button>
        </form>

       
      
    </div>
  )
}
