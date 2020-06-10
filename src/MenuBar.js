import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import amber from '@material-ui/core/colors/amber';
const moneyPrimary = amber[500];
const useStyles = makeStyles((theme) => ({
    
    root: {
      flexGrow: 1,
      backgroundColor: moneyPrimary
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }

  }));
function MenuBar(){
    const classes = useStyles();
    
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <SortIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                June
                </Typography>
                <IconButton ><MoreVertIcon /></IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar;