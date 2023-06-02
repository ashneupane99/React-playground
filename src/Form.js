import React from 'react'
import { RealData } from './RealData'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setDisplay } from './displaySlice'

export const Form = ({name}) => {

    const dispatch = useDispatch()
    const [str, setStr] = useState("")
 
    const handleOnChange = (e)=>{
        const {name, value} = e.target
        // console.log(name, value)
        setStr(value)
    } 
    
    const handleOnSubmit = (e)=> {
        const {name, value} = e.target
        e.preventDefault()
        // func(str)
        dispatch(setDisplay(str))
    }
  return (
    <div>
        <RealData str={str}/>
        <form action="" onSubmit = {handleOnSubmit}>
            <input name ="name" type="text" onChange ={handleOnChange} />
            <button>Submit</button>
        </form>

       
      
    </div>
  )
}
