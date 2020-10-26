import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    listContainer: {
      display: 'flex',
      justifyItems: 'space-between',
      width: '100%'
    },
    listMonth: {
        flexBasis: '20%',
    },
    listNote: {
        flexBasis: '60%',
    },
    listAmount: {
        flexBasis: '20%',
        textAlign: 'right'
      },
  }));
const CategoryLists = ({list}) =>{
    const { amount, note, selectedDate, month} = list;
    let d = new Date(selectedDate)
    let dd = d.getDate()
    const classes = useStyles();

    return(
        
            <ListItem classes={classes.listContainer}>
                <ListItemText className={classes.listMonth} primary={`${dd}/${month}`}/>
                <ListItemText   className={classes.listNote} primary = {note? note: 'no details'}/>
                <ListItemText  edge="end" className={classes.listAmount} primary={`$${amount}`}/>
            </ListItem>
        
        
    )

    }

 export default CategoryLists;   