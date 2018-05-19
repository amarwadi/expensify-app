import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../../fixtures/expenses';
import moment from 'moment';

test('should render expenseForm correctly', ()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly when initialized', ()=> {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    var form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', ()=> {
    const value = "New Description";
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    var textControl = wrapper.find('input').at(0);
    textControl.simulate('change', {
        target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
});


test('should set amount correctly on input change', ()=> {
    const value = "12.22";
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    var textControl = wrapper.find('input').at(1);
    textControl.simulate('change', {
        target: { value }
    });

    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount correctly when more decimals provided', ()=> {
    const value = "12.221";
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    var textControl = wrapper.find('input').at(1);
    textControl.simulate('change', {
        target: { value }
    });

    expect(wrapper.state('amount')).toBe("");
});

test('should call onSubmit properly for valid data', () => {
    const submitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={submitSpy} />);
    var form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('errorMessage')).toBe("");
    expect(submitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#idExpenseDate').prop("onDateChange")(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocus on changed', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#idExpenseDate').prop("onFocusChange")({focused: true});
    expect(wrapper.state('calendarFocused')).toEqual(true);
});