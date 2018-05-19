import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 
            ? (
                <p>No Expenses</p>
            ) 
            : (
                props.expenses.map((x) => {
                    return <ExpenseItem key={x.id} {...x}/>;
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters)
    }
};
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;