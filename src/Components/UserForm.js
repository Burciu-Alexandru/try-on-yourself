import React, { useState } from "react";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const nameChangeHandler = (event) => {
   console.log(event.target.value);
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
   console.log(event.target.value);
    setAge(event.target.value);   
    
  };

  const addUserHandler = (event) => {
    event.preventDefault()
 
    const user = {
      id: Math.random(),
      name: name,
      age: age,
    };
    console.log(user);

    props.addUsers(user);
    setName("");
    setAge("");
  };
  return (
    <form onSubmit={addUserHandler}>
      <label>Username</label>
      <input id="username" type="text" onChange={nameChangeHandler}></input>
      <label>Age</label>
      <input id="age" type="number" onChange={ageChangeHandler}></input>
      <button type='submit'>Add User</button>
    </form>
  );
};

export default UserForm;
