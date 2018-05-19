import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null,
    };
    
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange= (calendarFocused) => {
        this.setState(()=>({
            calendarFocused
        }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if(e.target.value === "date"){
            this.props.sortByDate();
        } else if(e.target.value === "amount") {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input type="text" id="txtText" value={this.props.filters.text} onChange= {this.onTextChange} />
                <select 
                    onChange={this.onSortChange}
                    value={this.props.filters.sortBy}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <br/>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={()=>false}
                />
            </div>
        );
    }
} 

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate(value)),
    sortByAmount: () => dispatch(sortByAmount(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);