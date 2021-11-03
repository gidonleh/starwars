import react, { useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
  
  useEffect( () => {
    requestData().then(data => setData(data.results));
  }, []);

  const classes = useStyles();
  return (

    <div className="App">
      
  <Router>
      
      
  
        <Switch>
          {data && data.map( (e,i) => {
            
            return (
              
              <Route exact path={`/${e.title}`} component={()=>{return (<Film film={e} index={i}/>)}} />
            )
          })}
        </Switch>
      <SwDrawer data={data}/>


  </Router>
    </div>
  );
}
//יובלים פרדס חנה ובריאות הילד חדרה

export default App;
