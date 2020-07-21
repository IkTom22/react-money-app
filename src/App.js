import React from 'react';

// import ReactDOM from 'react-dom';
import {AccountsProvider} from './contexts/accounts.context';
import {BalanceProvider} from './contexts/balance.context';
import {ExpItemsProvider} from './contexts/exp/expItems.context';
import {IncItemsProvider} from './contexts/inc/incItems.context';
import AppRouter from './routers/AppRouter';
// import BudgetApp from './BudgetApp';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BalanceProvider>
        <IncItemsProvider>
          <AccountsProvider>
            <ExpItemsProvider>
              <AppRouter />
            </ExpItemsProvider>
            </AccountsProvider>
        </IncItemsProvider>
      </BalanceProvider>
    </div>
  );
}

export default App;
