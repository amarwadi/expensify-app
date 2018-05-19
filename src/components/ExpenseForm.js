import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';

class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount/100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            errorMessage: ''
        };
    }
    

    onDescriptionChanged = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChanged = (e) => {
        const note = e.target.value;
        this.setState(()=>({note}));
    };
    
    onAmountChanged = (e) => {
        const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({amount});
        }
    };

    onDateChanged = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    };

    onFocusChanged = ({ focused }) => {
        this.setState(() => ({
            calendarFocused : focused
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            //set error
            this.setState(()=>({ errorMessage: "Please select a description and an amount"}));
        }
        else {
            //clear the error 
            this.setState(()=>({errorMessage: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };


    render() {
        return (
            <div>
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description"
                        autoFocus
                        value = {this.state.description}
                        onChange = {this.onDescriptionChanged}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value = {this.state.amount}
                        onChange = {this.onAmountChanged}
                    />
                    <SingleDatePicker
                        id="idExpenseDate"
                        date = {this.state.createdAt}
                        onDateChange={this.onDateChanged}
                        onFocusChange={this.onFocusChanged}
                        focused={this.state.calendarFocused}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    <textarea
                        placeholder="a note for your expense (optional)"
                        value = {this.state.note}
                        onChange={this.onNoteChanged}
                    >
                    </textarea>
                    
                    <button>Add Expense</button>

                </form>
            </div>
        );
    }
}

export default ExpenseForm;