import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

const priorExpense = {
    id: "111",
    description : "Gum",
    note : "Simple Stuff",
    amount : 195,
    createdAt: moment().subtract(2, 'days')
};

test('default should pass', ()=>{
    const response = expensesReducer([], { type: "@@INIT"});
    expect(response).toEqual([]);
});


test('add reducer must pass', ()=>{

    const expense = {
        id: "123ABC",
        description: "Hello World",
        note: "",
        amount: 1000,
        createdAt:moment(0).valueOf()
    };

    const actionToPass = {
        type: 'ADD_EXPENSE',
        expense: expense
    }
    
    const result = [expense];
    const response = expensesReducer([], actionToPass);
    expect(response).toEqual(result);
});

test('edit expense must pass', () => {
    const expense = {
        id: "123ABC",
        description: "Hello World",
        note: "",
        amount: 1000,
        createdAt:moment(0).valueOf()
    };

    const actionToPass = {
        type: 'EDIT_EXPENSE',
        id: "123ABC",
        updates: {
            amount: 2000
        }
    };
    
    const response = expensesReducer([expense], actionToPass);
    expect(response[0].amount).toEqual(2000);
});


test('remove reducer must pass', () => {

    const actionToPass = {
        type: 'REMOVE_EXPENSE',
        id: "111"
    }
    
    const result = [];
    const response = expensesReducer([priorExpense], actionToPass);
    console.log(response);
    expect(response).toEqual(result);
});