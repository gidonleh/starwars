import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
    //modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    return (
        <div style={{marginTop: '70px', marginLeft: matches? '240px' : ''}}>
            
            <Stack spacing={2}>
                <Item>title: {props.film.title}</Item>
                <Item>{props.film.opening_crawl}</Item>
                
               <Item style={{textAlign: 'center'}} 
                    onClick={()=>
                    {props.isFavorite(props.index);
                     setRef(!ref);
                     localStorage.setItem('flags', JSON.stringify(props.flags))
                    }
                     }>Click to add/remove from favorites <Button onClick={handleOpen}>
                {props.flags[props.index] ?  <StarIcon /> : <StarBorderIcon/> }
                  
                  
               </Button>    </Item>
           
            </Stack>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {props.flags[props.index] ?  'Nice Choice!' : 'I totally agree. I don\'t like this one either' }
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.flags[props.index] ?  `You Chose "${props.film.title}" as your favorite episode! You must be a huge fan` : 'Let\'s watch Batman instead' }
          </Typography>
        </Box>
      </Modal>
           {/* {props.film.title} */}
        </div>
    )
}
