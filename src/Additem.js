import React from 'react';


function Additem() {
 

  return (
    
 <div className="mb-3 " id="main" >
 <img className="todoImg" src="./img/pic2.jpg"/>
 
    <label for="exampleFormControlInput1" className="form-label" style={{display: 'inline-block'}}>Add Your Items Here</label>
    
<div className="relative" id="marg">

<input id="my-value" type="text" />

<button id="absolute" type="button" className="btn" >+</button>

</div>

   
  </div>

  )
}

export default Additem