import { useState, useEffect} from 'react';
import {HashRouter as Router, Route, Switch, useHistory, Redirect} from 'react-router-dom'

import SwDrawer from './components/SwDrawer';
import { makeStyles } from '@mui/styles';
import Film from './components/Film';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  }
})
const URL = "https://swapi.dev/api/films/?format=json";
const requestData = () => fetch(URL).then(res=>res.json());

function App() {

  let history = useHistory();

  const [data, setData] = useState([]);

  const [flags, setFlags] = useState([false, false, false, false, false, false]);

  useEffect( () => {
    updateFlags();
    requestData().then(data => setData(data.results));
    
  }, []);

  const updateFlags = () => {
    let temp = JSON.parse(localStorage.getItem('flags'));
    setFlags(temp);
  }

  const isFavorite = (index) => {

    flags[index] = !flags[index];
    setFlags(flags);
  }
  const classes = useStyles();
  return (

    <div>
      {console.log(flags)}
  <Router>
      
      
  <Redirect from="/" to="/A new hope" />
        <Switch>
        
          {data && data.map( (e,i) => {
            
            return (
              
              <Route exact path={`/${e.title}`} 
              component={()=>{return (<Film film={e} index={i} flags={flags} isFavorite={isFavorite}/>)}} />
            )
          })}
        </Switch>
      {flags && <SwDrawer data={data} flags={flags}/>}


  </Router>
    </div>
  );
}


export default App;
