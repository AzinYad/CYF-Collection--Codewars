const add = require("./ functionalAddition");

test(`functional Addition`, () => {
    let addThree = add(3);
    expect(addThree(3)).toEqual(6);
    });