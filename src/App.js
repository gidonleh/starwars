import react, { useState, useEffect} from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import MUIDrawer from './components/Drawer';
import SwDrawer from './components/SwDrawer';
import { makeStyles } from '@mui/styles';
import Film from './components/Film'
const useStyles = makeStyles({
  container: {
    display: 'flex',
  }
})
const URL = "https://swapi.dev/api/films/?format=json";
const requestData = () => fetch(URL).then(res=>res.json());

function App() {

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

    <div className="App">
      {console.log(flags)}
  <Router>
      
      
  
        <Switch>
          {data && data.map( (e,i) => {
            
            return (
              
              <Route exact path={`/${e.title}`} component={()=>{return (<Film film={e} index={i} flags={flags} isFavorite={isFavorite}/>)}} />
            )
          })}
        </Switch>
      {flags && <SwDrawer data={data} flags={flags}/>}


  </Router>
    </div>
  );
}
//יובלים פרדס חנה ובריאות הילד חדרה

export default App;
