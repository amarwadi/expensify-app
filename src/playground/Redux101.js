import {createStore} from 'redux';

//action generator-  because it generates action from one place.
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy : incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy : decrementBy
});

const setCount = ({setCount = 0} = {}) => ({
    type: "SET",
    setCount : setCount
});

const reset = () => ({
    type: "RESET"
});

//1. Reducers are pure functions - 2. NEVER change state or actions.

const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case "INCREMENT":
        return {
            count: state.count + action.incrementBy
        };
    case "DECREMENT":
        return {
            count: state.count - action.decrementBy
        };
    case "RESET" :
        return {
            count: 0
        }
    case "SET" : 
        return {
            count : action.setCount
        }
    default:
        return state;
    }
};

//createStore takes state and action, state can be initialized to any object we want
const store = createStore(countReducer);

//allows subscribing to store changes and doing something with them using a callback function.
//optionally we can take the return type to a constant for unsubsribing
const unsubscribe = store.subscribe(() => {
    console.log("Count", store.getState());
});

//allows dispatching actions with potential arguments.
store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy : 10}));
store.dispatch(decrementCount());

store.dispatch(reset());

store.dispatch(setCount({setCount: 100}));
