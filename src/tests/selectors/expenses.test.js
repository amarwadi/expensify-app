import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expensesList from '../../fixtures/expenses';


test('Filter by Text should work', () => {
    
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expensesList, filters);
    expect(result).toEqual([expensesList[1], expensesList[2]]);
});


test('Filter by Dates should work', () => {
    
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(2, 'days'),
        endDate: moment(0).add(1, 'days')
    };

    const result = selectExpenses(expensesList, filters);
    expect(result).toEqual([expensesList[0]]);
});

test('Sort By Amount should work', () => {
    
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expensesList, filters);
    expect(result).toEqual([expensesList[0], expensesList[2], expensesList[1]]);
});

test('Sort By Amount and Filter by Dates should work', () => {
    
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(5, 'days'),
        endDate: moment(0).add(1, 'days')
    };

    const result = selectExpenses(expensesList, filters);
    expect(result).toEqual([ expensesList[1], expensesList[0] ]);
});