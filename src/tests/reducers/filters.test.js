import filtersReducer  from '../../reducers/filters';
import moment from 'moment';

test('should setup default reducers', ()=>{
    const state = filtersReducer(undefined, { type : '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'), 
        endDate : moment().endOf('month')
    })
});


test('should set sortby to Amount', ()=>{
    const state = filtersReducer(undefined, { type:'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {

    const currentState = {
        text: "",
        sortBy : "amount",
        startDate: undefined,
        endDate: undefined
    };

    const sortByDateAction = { type:"SORT_BY_DATE" }
    const state = filtersReducer(currentState, sortByDateAction);
    expect(state.sortBy).toBe("date");

});

test('should set text filter', () => {
    const currentState = {
        text: "",
        sortBy : "date",
        startDate: undefined,
        endDate: undefined
    };

    const result = filtersReducer(currentState, {type: "SET_TEXT_FILTER", text: "HELLO"});
    expect(result.text).toBe("HELLO");
});

test('should set start date filter', () => {
    const currentState = {
        text: "",
        sortBy : "date",
        startDate: undefined,
        endDate: undefined
    };

    const result = filtersReducer(currentState, {type: "SET_START_DATE", startDate: moment(0).valueOf()});
    expect(result.startDate).toBe(moment(0).valueOf());
});

test('should set start end filter', () => {
    const currentState = {
        text: "",
        sortBy : "date",
        startDate: undefined,
        endDate: undefined
    };

    const result = filtersReducer(currentState, {type: "SET_END_DATE", endDate: moment(0).valueOf()});
    expect(result.endDate).toBe(moment(0).valueOf());
});