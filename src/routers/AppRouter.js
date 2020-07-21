import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BugdetApp from '../BudgetApp';
import ExpDashboard from '../expense/ExpDashboard';
import IncDashboard from '../income/IncDashboard';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={BugdetApp} exact={true}/>
            <Route path="/expdashboard" component={ExpDashboard} />
            <Route path="/incdashboard" component={IncDashboard} />
        </Switch>
    
    </BrowserRouter>

)
export default AppRouter;