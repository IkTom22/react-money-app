import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import BudgetIcons from '../BudgetIcons';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CategoryLists from './CategoryLists'
;
import { List } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    picked: {
        height: '50px',
        width: '50px',
        
        '& > *': {
          transform: 'scale(1.2)',
          padding: '4px',
        }
    },
  }));

function DashboardList(props){

    // accordion from materialUI
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    }
    const classes = useStyles();
    const {amount, title, type, listDetails} = props;
    const {incs, exps} = BudgetIcons;
    const indexIncIcon = incs.findIndex(e => e.title === title);
    const indexExpIcon = exps.findIndex(e => e.title === title);
    let pickedIncIcon = incs[indexIncIcon];
    let pickedExpIcon = exps[indexExpIcon];


    return (

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        
        <ListItem >
            
          <IconButton className={classes.picked}>
          {type ==="exp" && 
            <pickedExpIcon.icon
                style={{
                    fontsize:'large',
                    backgroundColor: pickedExpIcon.backgroundColor,
                    borderRadius: '50%',
                    color: 'white',
                    marginRight: '1rem',
                    padding: '2px'
                }} 
            />
          }
          {type==="inc"  &&
            <pickedIncIcon.icon
                style={{
                    fontsize:'small',
                    backgroundColor: pickedIncIcon.backgroundColor,
                    borderRadius: '50%',
                    color: 'black',
                    marginRight: '1rem'
                }} 
              />
            } 
          
          </IconButton>  
      
          <ListItemText
            primary={title }
          />
          <ListItem>
            <IconButton style={{marginLeft: 'auto'}} aria-label="amount" >
              <div style={{fontSize: '1.2rem'}}>{`$ ${amount}`}</div>
            </IconButton>
          </ListItem>
       
      </ListItem>
        
        </AccordionSummary>
        <AccordionDetails>
            <List className={classes.root}>
              { listDetails.length && 
                listDetails.map((list, i) => 
                  <CategoryLists  list={list} key={i}/>
                )     
              }
            </List>
          
        </AccordionDetails>
      </Accordion>

             
        )
}

export default DashboardList;