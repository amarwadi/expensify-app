import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Remove Expense should work as expected', () => {
    var response = removeExpense({id: 1});
    expect(response).toEqual({
        type: "REMOVE_EXPENSE",
        id: 1
    });
});

test('Edit Expense should work', () => {
    var response = editExpense( "abc123", { note: "This is a test" });
    expect(response).toEqual({
        type: "EDIT_EXPENSE",
        id: "abc123",
        updates : {
            note : "This is a test"
        }
    });
});

const expenseData = {
    description: "Hello", 
    note: "Note", 
    amount: 1000, 
    createdAt: 12100
}

test('Add Action should work', () => {
    var response = addExpense(expenseData);
    expect(response).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        }
    });
})