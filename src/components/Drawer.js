import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {makeStyles}  from '@mui/styles';
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useHistory} from 'react-router-dom'
const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  root: {
    display: 'flex',
  }
})
const MUIDrawer = (props) => {
    const classes = useStyles();
    let history = useHistory();
    
    return (
        <div className={classes.root}>
          <Drawer variant="permanent" 
                className={classes.drawer}
                anchor="left"
                classes={{ paper : classes.drawerPaper}}>
            
            <div>
              <Typography variant="h5">
                Star Wars Episodes

              </Typography>
            </div>
            <List>
              {props.data && props.data.map( (e,i) => {
                return (
                  <>
                  
                  <ListItem key={e.episode_id} button onClick={()=>history.push(`/${e.title}`)}>
                  <ListItemIcon><StarBorderIcon/></ListItemIcon>
                  <ListItemText primary={e.title}/>
                </ListItem>
                </>
                )
              })}
             
            </List>

        </Drawer>
        </div>
    )
}

export default MUIDrawer;