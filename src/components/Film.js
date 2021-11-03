import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

export default function Film(props) {

    const [myFlags, setMyFlags] = useState([]);
    useEffect( () => {
        setMyFlags(JSON.parse(localStorage.getItem('flags')))
      }, []);

    let history = useHistory();

    const [ref, setRef] = useState(false);

    const matches = useMediaQuery('(min-width:600px)');
    
    return (
        <div style={{marginTop: '70px', marginLeft: matches? '240px' : ''}}>
            
            <Stack spacing={2}>
                <Item>title: {props.film.title}</Item>
                <Item>{props.film.opening_crawl}</Item>
                <Item>episode id: {props.film.episode_id}</Item>
                <Item>{props.flags[props.index] ? 'true' : 'false'}</Item>
                <Item>
                    <List>
                        <ListItem>
                            <ListItemIcon onClick={()=>
                    {props.isFavorite(props.index);
                     setRef(!ref);
                     localStorage.setItem('flags', JSON.stringify(props.flags))
                    }
                     }>
                              {props.flags[props.index] ?  <StarIcon /> : <StarBorderIcon/> } 
                            </ListItemIcon>
                        </ListItem>
                    </List>
                   </Item>
           
            </Stack>
           {/* {props.film.title} */}
        </div>
    )
}
