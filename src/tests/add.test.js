const add = (a, b) => a + b;
const subtract = (a,b) => a-b;

test('should add 2 numbers', () => {
    const result = add(1,2);
    expect(result).toBe(3);
});

test('should subtract 2 numbers', () => {
    expect(subtract(8,3)).toBe(5);
})