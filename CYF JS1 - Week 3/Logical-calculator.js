// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

//     Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values(1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value(True or False).


function logicalCalc(booleans, operator) {
    //your code here
    let result = booleans[0];
    for (let i = 1; i < booleans.length; i++) {
        if (operator === "AND") {
            result = result && booleans[i];
        } else if (operator === "OR") {
            result = result || booleans[i];
        } else if (operator === "XOR") {
            result = result !== booleans[i];
        }
    }
    return result;
}

// best practice
// function logicalCalc(array, op) {
//     if (op === 'AND') return array.every(v => v);
//     else if (op === 'OR') return array.some(v => v);
//     else return !!array.reduce((s, v) => s ^ v);
// }