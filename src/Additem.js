import React,{useState} from 'react';

import {addTodo} from "./actions";
import {deleteTodo} from "./actions";

import { useSelector, useDispatch } from "react-redux";


function Additem() {
 const[inputData,setinputData]=useState('');
  
  const dispatch = useDispatch();

  return (
 <div class="mb-3" id="main">
 <img className="todoImg" src="./img/pic2.jpg"/>
 
    <label for="exampleFormControlInput1" className="form-label" style={{display: 'inline-block'}}>Add Your Items Here</label>
    
<div className="relative">

<input id="my-value" type="text" value={inputData} onChange={(event)=>setinputData(event.target.value)}/>

<button id="absolute" type="button" className="btn">+</button>
</div>

  </div>
 
  )
}

export default Additem