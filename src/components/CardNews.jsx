import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';;

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

const CardNews = ({ newsCard }) => {
    //useStates
    const [liked, setLiked] = useState(false);
    const [expanded, setExpanded] = useState(false);

    //handlers
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (        
        <Card style={{
                width: 375, 
                background: "rgb(213, 174, 176)"
        }}>
            <CardHeader     
                avatar={    
                    <Avatar aria-label="recipe">
                        <img alt="News company" src={newsCard.logo} />
                    </Avatar>
                } 
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                } 
                title={newsCard.creator} 
                subheader={newsCard.pubDate} 
            />
            <CardMedia 
                component="img" 
                height="200" 
                image={newsCard.description} 
                alt="News picture" 
                style={{ objectFit: "fill" }}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <strong>{newsCard.title}</strong>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    {liked ? (
                        <FavoriteIcon onClick={(e) => setLiked(false)} /> 
                    ) : (  
                        <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
                    )}
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore 
                    expand={expanded} 
                    onClick={handleExpandClick} 
                    aria-expanded={expanded} 
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent><Typography>{newsCard.category}</Typography></CardContent>
            </Collapse>
        </Card>
    )
}

export default CardNews;