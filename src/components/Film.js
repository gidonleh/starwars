import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

export default function Film(props) {

    let history = useHistory();

    
    return (
        <div style={{marginTop: '70px', marginLeft: '240px'}}>
            <Stack spacing={2}>
                <Item>title: {props.film.title}</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
           {/* {props.film.title} */}
        </div>
    )
}
