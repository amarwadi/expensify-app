import React from 'react';
import { shallow } from 'enzyme';
import ExpenseItem from '../../components/ExpenseItem';
import expensesList from '../../fixtures/expenses';

test('expense Item should render as expected', ()=>{
    const wrapper = shallow(<ExpenseItem {...expensesList[0]} />);
    expect(wrapper).toMatchSnapshot();
});
