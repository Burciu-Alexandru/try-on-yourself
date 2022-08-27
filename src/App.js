import React, {useState} from 'react';
import './App.css';

import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
const DummyData=[
  {
    id: 'e1',
    name: 'Florin',
    age: 23,

  },
  {
    id: 'e2',
    name: 'Marius',
    age: 52,

  },
]
function App() {

  const[users,setUsers]=useState(DummyData);


  const addUser = (user) =>{

     console.log("In App Component");
     setUsers((prevUsers)=>{
      return[user, ...prevUsers];
     });
     console.log("addedUser");
  };

  const removeUser = (id) =>{

    console.log("In App Component");
    const newArray = users.filter((user) => user.id !== id );
    setUsers(newArray);
    console.log("User removed");
 };


  return (
    <div className="App">
        <UserForm addUsers={addUser}></UserForm>
        <UserList items={users} removerUser={removeUser}></UserList>
    </div>
  );
}

export default App;
