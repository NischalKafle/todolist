import React,{useState} from 'react';
import TodoItem from './TodoItem';

const Additem =()=>{
 
const [list,setList]=useState("");
const[item,setItem]=useState([]);
const addItem=(e)=>{
setList(e.target.value);
}
const newItem=()=>{
  setItem((itemAdd)=>{
  return [...itemAdd,list]; 
})
setList("");
}
const deleteList=(id)=>{
  setItem((oldvalues)=>{
    return oldvalues.filter((arrEle,index)=>{
     return index!=id;
    });
  });
}
  return (
    
 <div className="mb-3 " id="main" >
 <img className="todoImg" src="./img/pic2.jpg"/>
 
    <label for="exampleFormControlInput1" className="form-label" style={{display: 'inline-block'}}>Add Your Items Here</label>
    
<div className="relative" id="marg">

<input id="my-value" type="text" onChange={addItem} value={list} />

<button id="absolute" type="button" className="btn" onClick={newItem}>+</button>
<div id="ol">
<br/>
<br/>
<ol >
{
  item.map((value,index)=>{
    return (
      <TodoItem key={index} id={index} listAdd={value} deleteItems={deleteList}/>
    )
  })
}
</ol>
</div>
</div>

   
  </div>

  )
}

export default Additem