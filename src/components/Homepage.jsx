import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@material-ui/core';
import axios from './axios.js';                             

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Homepage = () => {
    const [expanded, setExpanded] = useState(false);
    const [data, setData ] = useState([])
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

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
                        <Card  style={{width: 375, background: "rgb(213, 174, 176)"}}>
                            <CardHeader avatar={<Avatar aria-label="recipe"><img alt="Slika novina" src={newsCard.logo} /></Avatar>} action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>} title={newsCard.creator} subheader={newsCard.pubDate} />
                            <CardMedia component="img" height="200" image={newsCard.description} alt="Paella dish" style={{ objectFit: "fill",  }}/>
                            <CardContent><Typography variant="body2" color="text.secondary"><strong>{newsCard.title}</strong></Typography></CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
                                <IconButton aria-label="share"><ShareIcon /></IconButton>
                                <ExpandMore expand={false} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"><ExpandMoreIcon /></ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent><Typography>{newsCard.category}</Typography></CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
                    
            </Grid>
        </div>
    )
}

export default Homepage