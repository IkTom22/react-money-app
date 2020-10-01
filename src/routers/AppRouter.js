import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BugdetApp from '../page/BudgetApp';
import ExpDashboard from '../components/expense/ExpDashboard';
import IncDashboard from '../components/income/IncDashboard';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={BugdetApp} exact/>
            <Route path="/expdashboard" component={ExpDashboard} />
            <Route path="/incdashboard" component={IncDashboard} />
        </Switch>
    
    </BrowserRouter>

)
export default AppRouter;