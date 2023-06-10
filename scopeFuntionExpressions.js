// function expression

function teacher() { /*   */};

var myteacher = function anotherTeacher() {
    console.log(anotherTeacher);
};

console.log(teacher);
console.log(myteacher);
console.log(anotherTeacher); // reference error cuz another teacher is another scope

var clickHandler = function(){
    //  ...
}

var keyhandler = function keyhandler() {
    // ...
}


// anonymous function expressions
// name function expressions;



//   1.     name function expressions;

// reasoss to choo0se always naem function expressions

    // 1. reliable function self-reference*(recursion, etc);
    // 2. more debuggable stack traces
    // 3. more self-documenting code



/// arrow functions


// ...
// ..
// .