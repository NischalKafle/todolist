import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Additem() {
  return (
 <div class="mb-3" id="main">
 <img className="todoImg" src="./img/pic2.jpg"/>
 
    <label for="exampleFormControlInput1" class="form-label" style={{display: 'inline-block'}}>Add Your Items Here</label>
    
<div className="relative"><input type="text"/>
<button className="absolute">+</button>
</div>

  </div>
 
  )
}

export default Additem