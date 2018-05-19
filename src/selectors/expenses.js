import moment from "moment";

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((x) => {
        const createdAtMoment = moment(x.createdAt);
        const startDateMatch = startDate ?  startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = x === "" || x.description.toLowerCase().includes(text);
        return startDateMatch && endDateMatch && textMatch;
    }).sort(
        (a, b) => {
            if(sortBy === "date") {
                return a.createdAt < b.createdAt ? -1: 1;
            }
            else if(sortBy === "amount") {
                return a.amount < b.amount ? -1 : 1;
            }
        }
    );
};