import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import PplCard from './PplCard';

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
        
      <Grid
        container
        spacing={10}
        style={{padding: '24px'}}
      >
        {users.map( users => 
        <Grid
          key={users.id}
          item
          xs={12} sm={6} lg={4} xl={3}
          >
            {/* mapping into the card */}
             {/* {users.map(user =>  */}
            <PplCard
            // he had key={users.id}
                key={users.id}
                email={users.email}
                firstName={users.first_name}
                lastName={users.last_name}
                avatar={users.avatar}
             />
        
        </Grid>
        )}
      </Grid>
     <> 
     <ul>
        {users.map(user => (
          <ul key={user.id}>{user.first_name}</ul>
        ))}
      </ul><span>Above is the view of list</span>
     </>
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

// ? is there a way to tell with is self closing tabs

//nested grids--- grid within a grid

// 1st grid is outer grid the whole container 
 // - inside the grid will be the item grid
 // grid item
 // xs=12 is our max so we have 12 colums -1 card
 // sm=6 is our max so we have 6 colums - 2 cards
 // med=4  is our max so we have 4 colums - 3 cards\
 // lg=4 is our max so we have 
 // xl=3 