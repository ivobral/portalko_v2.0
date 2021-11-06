import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import axios from './axios.js';    
import CardNews from './CardNews';                         

const Homepage = () => {
    //useStates
    const [data, setData ] = useState([])

    //useEffects
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('/');

            setData(res.data);
            return res;
        }

        fetchData()
    }, []);

    
    return (
        <div style={{ padding: 30 }}>
            <Grid container spacing={9} justifyContent="center">
                {data.map((newsCard) => (
                    <Grid item key={newsCard.link} style={{ padding: 30 }}>
                        <CardNews newsCard={newsCard} />
                    </Grid>
                ))} 
            </Grid>
        </div>
    )
}

export default Homepage