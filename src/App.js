import React, { useState, useEffect } from 'react';
import './App.css';
import RandUsers from "./RandUsers"
import AddNewUser from "./AddNewUser"

function App() {
  
  const [randUser, setRandUser] = useState([])
  const [changer, setChanger] = useState(0)
  const [showAddNewUser, setShowAddNewUser] = useState(false)
  //const [lulli, setLulli] = useState([])

  useEffect(()=>{
      fetch("https://randomuser.me/api/")
      .then(response=>response.json())
      .then(data=>setRandUser(data.results[0]))

  },[])

  useEffect(()=>{
    fetch("https://randomuser.me/api/")
    .then(response=>response.json())
    .then(data=>setRandUser([...randUser,data.results[0]]))
  
},[changer])
  
  function dekhlo(){
    setChanger(changer +1)
    console.log(randUser)
  }

  function karlo(){
    setShowAddNewUser(!showAddNewUser)
    console.log(showAddNewUser)
  }

  const addNewUser = (user) =>{
    const name = {title:user.title, first: user.first, last:user.last}
    const location = {city: user.city}
    const dob = {age: user.age}

      setRandUser([
        ...randUser, {name: name, location: location, dob: dob, gender: user.gender, email:user.email, cell:user.cell } 
        
      ])

  } 



      return (
        
        <div className="App">
          <header className="App-header">
            <h1>Users Information</h1>
            <button onClick={dekhlo} style={{fontSize: 25}}>Fetch User!</button>
            <button onClick={karlo} style={{fontSize: 20}}>Add a New User</button>
            
          </header>
        
          {showAddNewUser && <AddNewUser karlo={karlo} onAddUser={addNewUser}/>}
         
          <div className="container2">
          
            <table className="table">
            {changer > 1 ? <RandUsers data={randUser}/>:""}
            </table>
          </div>
          
        </div>
      
    )

}

export default App;
