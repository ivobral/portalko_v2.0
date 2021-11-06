import React from 'react'
// import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';

const Navbar = () => {
    function searchToggle(event, form_state) {
        event.preventDefault();
        const container = document.getElementsByClassName('search-wrapper');
        const form = container[0];
        const input = form.children[0];

        if(!form.classList.contains('active')){
            form.classList.add('active');
        }
        else if(form.classList.contains('active') && input.textLength !== 0 && form_state){
            form.classList.remove('active');
            // clear input
            input.value="";
        }
    };

    return (
        <AppBar position="static" style={{background: "#07051a", color: "#5e0303"}}>
            <Toolbar>
                <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <h2 data-text="Portalko" >Portalko</h2>
                </Typography>  
                <form action="" className="search-wrapper">
                    <input className="input-holder" onChange={(event)=>searchToggle(event, false)} type="search" placeholder="Type to search" required style={{color:"#5e0303"}}/>
                    <i className="fa fa-search" style={{color:"#5e0303"}}></i>
                    <span className="close" onClick={(event)=>searchToggle(event, true)}>
                    </span>
                </form>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
