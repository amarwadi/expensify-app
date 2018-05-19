import moment from 'moment';

const filters = {
    text : '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const billFilters = {
    text: 'bill',
    sortBy: 'amount',
    startDate: moment(0).subtract(2, 'days'),
    endDate: moment(0).add(2, 'days')
}

export { filters, billFilters }

