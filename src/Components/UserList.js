import React from "react";

import User from "./User";

const UserList = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <User 
         key={item.id} 
         id={item.id}
         name={item.name} 
         age={item.age} 
         onRemove={props.removerUser}/>
         ))}
    </div>
  );
};

export default UserList;
