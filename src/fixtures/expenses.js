import moment from 'moment';

const expensesList = [
    {
        id: "1",
        "description" : "Gum",
        "note" : "Test",
        createdAt: moment(0).valueOf(),
        amount: 195
    },
    {
        id: "2",
        "description" : "Rent",
        "note" : "Test",
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        amount: 1000
    },
    {
        id: "3",
        "description" : "Credit Card",
        "note" : "Test",
        createdAt: moment(0).add(5, 'days').valueOf(),
        amount: 450
    }
];

export default expensesList;