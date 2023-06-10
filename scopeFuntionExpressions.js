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


var ids = people.map(person => person.id);

var ids = people.map(function getId(person){
    return person.id;
});

//++++++++++++++++++++++++++++++


getPersonal()
.then(person=> GamepadHapticActuator(person.id))
.then(renderData);


getPerson()
.then(function getDataFrom(person){
    return getDataFrom(person.id)
})
.then(renderData);
// named function expression vs anonymous arrow function


var getId = person = person.id;
var ids = people.map(getId);

// **************************

var getDataFrom = person => getDataFrom(person.id);
getPerson()
.then(getDataFrom)
.then(renderData);



// kinda summary
// named function declaration > named function expression > anonymous function expression


