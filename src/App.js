import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => { //? just to make sure we dont have to say promise we can just use async and it auto know what to do
    async function fetchData() { //https://reqres.in/ **** t(test your front-end a real API)
      setUsers(
        fetch('')
      )
    }
  },[] )

  return (
    <div className="App">
      <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>

     
    </div>
  );
}

export default App;
