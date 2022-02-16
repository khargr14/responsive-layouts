import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => { //? just to make sure we dont have to say promise we can just use async and it auto know what to do
    async function fetchData() { //https://reqres.in/ **** (test your front-end a real API)
      setUsers(
        fetch('https://reqres.in/api/users?page=2') // http=base of the url then api
          .then(res => res.json()) // turning the response to json
          .then(res => console.log(res))
       ) 
    }
    fetchData(); // we have do a call on function to see data
  } 
  
  ,[] )

  return (
    <div className="App">
      <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>

     
    </div>
  );
}

export default App;
