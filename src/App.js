import {useState} from 'react';



import './App.css';

import {Title} from "./Title"

import{Form} from "./Form";
import { ShowResult } from './ShowResult';
//line 3 and 4 can also be written as following:
// import SubTitle2 {Title, SubTitle } from "./Title";
//here SubTitle2 is a default component so it must be written outside {} bracket.

function App() {
  const [display, setDisplay] = useState("")

 

//   const [counter, setCounter] = useState(2323)
//   // here useState is a state hook and setCounter is variable which  a function to update the state hook
// const increase = () => {
 
//   setCounter(counter + 1)
// }
// const decrease = () => {
 
//   setCounter(counter - 1)
// }

  return (

    <div className="App">
    
     {/* <p>data in real time</p> */}
    
     <Title data= {display + " Title part"}/>

     <Form func = {setDisplay}/>
     
     <ShowResult show ={display + " After Submit part"} />
  
     {/* <p>{counter}</p>
     <button onClick ={increase}  >+</button>
     <button onClick ={decrease}>-</button> */}
    </div>
   
  );
}

export default App;
