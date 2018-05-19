import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//expenses action generator
const addExpense = (
    {
        description = "", 
        note = "", 
        amount = 0, 
        createdAt = 0
    } = {}
) => (
    {
        type: "ADD_EXPENSE",
        expense : {
            id : uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });

//remove expense action generator

const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id : id
});

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text
});

const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((x) => {
        const startDateMatch = typeof startDate !== 'number' || x.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || x.createdAt <= endDate;
        const textMatch = x === "" || x.description.toLowerCase().includes(text);
        return startDateMatch && endDateMatch && textMatch;
    }).sort(
        (a, b) => {
            if(sortBy === "date") {
                return a.createdAt < b.createdAt ? 1: -1;
            }
            else if(sortBy === "amount") {
                return a.amount < b.amount ? 1 : -1;
            }
        }
    );
};

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            //return state.concat(action.expense);
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => id != action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return { ...expense, ...action.updates };
                }else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filterReducerDefaultstate = {
    text: '',
    sortBy: 'date',
    startDate: undefined, 
    endDate : undefined
};

const filtersReducer = (state = filterReducerDefaultstate, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: 'amount'
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: 'date'
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
            case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters : filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
});

const expenseOne = store.dispatch(addExpense({description : 'rent', amount: 10000, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({description : 'Coffee', amount: 300, createdAt:-1000 }));


//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

store.dispatch(setTextFilter('cof'));

//store.dispatch(setStartDate(-2000));

//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));


const demoState = {
    expenses : [{
        id : "123131",
        description : "Jan Rent",
        note : "This is the January rent",
        amount : 54500,
        createdAt : 0
    }],
    filters : {
        text : "rent",
        sortBy: "amount", //amount or date
        startDate : undefined,
        endDate : undefined
    }
};