import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListFilters, { ExpenseListFilter } from '../../components/ExpenseListFilters';
import {filters, billFilters} from '../../fixtures/filters';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

let setTextFilter, sortByAmount, sortByDate, wrapper, setStartDate, setEndDate;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            setTextFilter={setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />);
});

test('should render expense list filter correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
});


test('should render bill Filter criteria correctly', () => {
    wrapper.setProps({
        filters: billFilters
    });
    expect(wrapper).toMatchSnapshot();
});