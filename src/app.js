import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();
const state = store.getState();

store.dispatch(addExpense({description: "Water Bill", amount: 10000, createAt: 500}));
store.dispatch(addExpense({description: "Gas Bill", amount: 5000, createAt: 1000} ));
store.dispatch(addExpense({description: "Rent", amount: 109500, createdAt:0 }));

console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = ( 
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));