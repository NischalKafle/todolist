import React from 'react';

import {incNumber} from "./actions";
import {decNumber} from "./actions";

import { useSelector, useDispatch } from "react-redux";


function Additem() {
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
 <div class="mb-3" id="main">
 <img className="todoImg" src="./img/pic2.jpg"/>
 
    <label for="exampleFormControlInput1" className="form-label" style={{display: 'inline-block'}}>Add Your Items Here</label>
    
<div className="relative">
<a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
<input id="my-value" type="text" value={changeTheNumber}/>
<a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
<button id="absolute" type="button" className="btn">+</button>
</div>

  </div>
 
  )
}

export default Additem