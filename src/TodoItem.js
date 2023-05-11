import React from "react";
const TodoItem=(props)=>{
return(
    <div className="fly">
    <li>{props.listAdd}</li>
    <i className="fas fa-2x fa-trash" onClick={()=>{
            props.deleteItems(props.id);
        }
    }></i>
    </div>
)
}
export default TodoItem;