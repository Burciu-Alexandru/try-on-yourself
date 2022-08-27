import React from "react";

const User = (props) =>{
    return(
        <div onClick={()=> props.onRemove(props.id)}>
            <p>{props.name}</p>
            <p>{props.age}</p>
           
        </div>
    )
} 

export default User ;