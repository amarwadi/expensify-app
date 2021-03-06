import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

export class AddExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return(
            <div>
            This is Add Expense Page
            <ExpenseForm 
                onSubmit={this.onSubmit}
            />
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);