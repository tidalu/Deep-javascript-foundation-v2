function f(...args) {
    return args;
}

f(1, 2, 3); // -> [ 1, 2, 3 ]

// but  we can call any function with backticks 
console.log(f`true is ${true}, false is ${false}. array is ${[1, 2, 3]}`)
f`true is ${true}, false is ${false}. array is ${[1, 2, 3]}`;


// Explanation 

function template(string, ... keys) {
    // do smth with string and keys
}


// call call call

console.log.call.call.call.call.call.apply(a => a, [1, 2]);

console.log([...'.....'].length)