import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import  {expItemsContext} from './contexts/exp/expItems.context';
import {incItemsContext} from './contexts/inc/incItems.context';
import DashboardDialogs from './DashboardDialogs';
import DashboardList from './DashboardList';
import {groupBy, sumAmount} from './helper/filterAmount';


function DashboardLists(props){
    const{type} = props;
    const expItems = useContext(expItemsContext);
    const incItems = useContext(incItemsContext);
    console.log(incItems)
    let expGroupedByTitle = groupBy(expItems, 'title');
    let incGroupByTitle = groupBy(incItems, 'title');
    let expCategories = Object.keys(expGroupedByTitle);

    // let amount = expCategories.map(e => {
    //     return  {[e] :expGroupedByTitle[e].reduce((prev, cur)=>{
    //         return prev + cur.amount
    //     }, 0)} ;
    // })
    let expAmount = sumAmount(expCategories, expGroupedByTitle);
    console.log(expAmount)



    if(expItems.length || incItems.length)
    return ( 
        <Grid container justify="space-around" direction="row">
            <Grid item xs={6} >
                    { type === "inc" 
                        ? incItems.map((incItem, i) => (
                        <React.Fragment key={i}>
                        {incItem.id &&
                            <Paper>
                            <List>
                                 <DashboardList {...incItem} key={incItem.id}/>
                            </List>
                                
                            </Paper>
                        }
                        </React.Fragment>
                    )) : expAmount.map((exp, i) => (
                        <React.Fragment key={i}>
                         {exp.amount !==0 &&
                            <Paper style={{width:"90%" ,marginTop: "1rem"}}>
                                <List>
                                     <DashboardList {...exp} key={i} type={type}/>
                                </List>       
                            </Paper>}
                        </React.Fragment> ))}
            </Grid>
        </Grid>
        
    )

}

export default DashboardLists;