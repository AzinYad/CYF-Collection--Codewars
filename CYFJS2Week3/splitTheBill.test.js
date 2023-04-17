const splitTheBill = function splitTheBill(x) {
    let names = Object.keys(x);
    const result = {};
    let total = names.reduce((sum, name) => sum + x[name], 0);
    let avg = total / names.length;
    names.forEach(name => {
        result[name] = Number.isInteger(x[name] - avg) ? x[name] - avg : parseFloat((x[name] - avg).toFixed(2));
    });
    return result;
};

describe('splitTheBill', () => {
    test('should split the bill evenly when all values are the same', () => {
        const result = splitTheBill({ A: 20, B: 20, C: 20 });
        expect(result).toEqual({ A: 0, B: 0, C: 0 });
    });

    test('should split the bill correctly when values are different', () => {
        const result = splitTheBill({ A: 20, B: 15, C: 10 });
        expect(result).toEqual({ A: 5, B: 0, C: -5 });
    });

    // Add more test cases here...
});
