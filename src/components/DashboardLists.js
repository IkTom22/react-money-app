import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import  {expItemsContext} from '../contexts/exp/expItems.context';
import {incItemsContext} from '../contexts/inc/incItems.context';
import DashboardList from './DashboardList';
import {groupBy, sumAmount} from '../helper/filterAmount';
import{month, sortByMonth} from '../helper/datePicker';


function DashboardLists(props){
    const{type} = props;
    const expItems = useContext(expItemsContext);
    const incItems = useContext(incItemsContext);
  
    let thisMonth = month(new Date())
    let sortExpByMonth = sortByMonth(expItems, thisMonth);
    let sortIncByMonth = sortByMonth(incItems, thisMonth);
   
    let expGroupedByTitle = groupBy(sortExpByMonth, 'title');
    let incGroupedByTitle = groupBy(sortIncByMonth, 'title');

    let expCategories = Object.keys(expGroupedByTitle);
    let incCategories= Object.keys(incGroupedByTitle);

    let expAmount = sumAmount(expCategories, expGroupedByTitle);
    let incAmount = sumAmount(incCategories, incGroupedByTitle);  

    if(expItems.length || incItems.length)
    return ( 
                type === "inc" 
                ? incAmount.map((inc, i) => (
                <React.Fragment key={i}>
                {inc.amount !==0 &&
                    <Grid items style={{width: "100%", marginTop: "1rem"}}>
                    <Paper >
                        <List>
                            <DashboardList {...inc} key={inc.id} type={type}/>
                        </List>
                        
                    </Paper>
                    </Grid>
                }
                </React.Fragment>
            )) : expAmount.map((exp, i) => (
                <React.Fragment key={i}>
                    {exp.amount !==0 &&
                    <Grid items style={{width: "100%", marginTop: "1rem"}}>
                    <Paper >
                        <List>
                                <DashboardList {...exp} key={exp.id} type={type}/>
                        </List>       
                    </Paper>
                    </Grid>
                }
                </React.Fragment> ))

    )

}

export default DashboardLists;