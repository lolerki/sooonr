import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    logo: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        textDecoration: 'none',
    },
};

export default function  MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = withStyles(styles);

    function handleChange(event) {
        setAuth(event.target.checked);
    }

    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <AppBar position="fixed" style={{width:  100 + "vw", background: "linear-gradient(to bottom right, #67b26f, #4ca2cd)"}}>
                <Toolbar>
                    <Typography style={{textAlign: "left", width: 20 + "%" }}>
                        <a style={{textDecoration: "none", color: "white"}} href="http://localhost:8080">SOOONR</a>
                    </Typography>
                    <ul style={{textAlign: "right", marginRight: 10 + "%", width: 70 + "%", listStyle: "none", color: "white"}}>
                        <a style={{textDecoration: "none", color: "white"}} href="http://localhost:3000/events"><li style={{display: "inline-block", width: 15 + "%", textAlign: "center"}}>Booking</li></a>
                        <a style={{textDecoration: "none", color: "white"}} href="http://localhost:8080/fr/about"><li style={{display: "inline-block", width: 15 + "%", textAlign: "center"}}>A propos</li></a>
                        <a style={{textDecoration: "none", color: "white"}} href="http://localhost:8080/fr/contact"><li style={{display: "inline-block", width: 15 + "%", textAlign: "center"}}>Contact</li></a>
                        <a style={{textDecoration: "none", color: "white"}} href="http://localhost:8080/fr/login"><li style={{display: "inline-block", width: 15 + "%", textAlign: "center"}}>Connexion</li></a>
                    </ul>

                </Toolbar>
            </AppBar>
        </div>
    );
}