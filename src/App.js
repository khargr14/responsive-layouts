import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => { //? just to make sure we dont have to say promise we can just use async and it auto know what to do
    async function fetchData() { //https://reqres.in/ **** (test your front-end a real API)
      //await works with async -- ? await always in front of fetch??
       setUsers(
       await fetch('https://reqres.in/api/users?page=2') // http=base of the url then api
          .then(res => res.json()) // turning the response to json
         // .then(res => console.log(res))\
         // render to the browser
         .then(res => res.data)
         .catch(err => console.log(err, 'Fetch warning!!'))
       ) 
    }
    fetchData(); // we have do a call on function to see data
  } 
  
  ,[] ) // ? explain the [] again

  return (
    <div className="App">
      <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
      {/* {users} to see the users--- {.map()} to iterate/ loop through*/}
      {users.map(user => user.first_name)}
      <ul>

        {users.map(user => (
          <ul key={user.id}>{user.first_name}</ul>
        ))}
      </ul>

     
    </div>
  );
}

export default App;
//EX: FOR LISTING OUT DATA IN MAP
// <ul>
// {Movies.map(data => (
//   <li key={data.id}> {data.name}</li>
// ))}
// </ul>