import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BugdetApp from '../page/BudgetApp';
// import ExpTotal from '../components/expense/ExpTotal';
// import IncTotal from '../components/income/IncTotal';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={BugdetApp} exact/>

        </Switch>
    
    </BrowserRouter>

)
export default AppRouter;