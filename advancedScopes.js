// lexical scope
// related to compiler 
// it is accessing to the element within it's declared or inner scope of it, but not vice verse
// it is compile time scope

// dynamic scope
// it is a run time scope and it does not care about any hirearchy, if the variable x is declared before it is called it can be accessed does not matter the deeps of declaring,

var teacher = "Alfa";

function otherClass(){
    var teacher = "Suyz";

    function ask(question){
        console.log(teacher, question);
    }

    ask("why?")
};



// function scoping// IIFE Pattern

// ..
var student = "Alfa";
(function anotherStudent() {
    var student = "Gamma";
    console.log(student);// Gamma
})();

// ( anotherStudent )(); // above i replaced brackets  to the declaration of the function, so no need to call 

console.log(student); // Alfa
var teacher1;
try {
    teacher1 = fetchTeacher1(1);
}
catch (err) {
    teacher1 = "Me";
}

// another way 
var teacher1 = (function getTeacher1(){
try {
    teacher1 = fetchTeacher1(1);
}
catch (err) {
    teacher1 = "Me";
}
})();


// block scoping

// instead of functions we can have  blocks {} and whatever we declare inside of the block we will not be able to use that
var my = "sevgilim";

{ // blocks are not scopes until they have let or const inside pf them and sort of implicity makes them scope
    let  my = "Seni";  // here if we declare my with var it will not be scope and we will be able to acces to the variable from outer block
    console.log(my);
}
console.log(my);
// another example

function diff(x, y) {
    if(x > y) {
        let tmp = x;  // because of let we will be able to access to the tmp
        x = y;
        y = tmp;
    }
    return y - x;
}

// it is said you can replace all var with let , but do not do that, it makes u problem

function repeat(fn, n) {
    var result ;
    for(let i = 0; i < n; i++){ // here we cannot use var it makes the i global, then it will be serious problem
        result = fn(result, i);
    }

    return  result;
}
// one plus var, we can declare the same variable more than once with war but not with let , like here

function lookupRecords(searchStr) {
    try {
        var id = getRecord( searchStr );

    }
    catch (err){
        var id = -1; // here we will not we able to use let, cuz it will be a bug, id is declared twice in the same scope
    }
    return id;
}


/// explicit let block

// if  we have and need some variables which are necessary only couple of lines, the best way is to make a scope of blocks for them

function formatStr( str ) {
    { let prefix, rest;
        prefix = str.slice( 0, 3 );
        rest = str.slice( 3 );
        str = prefix.toUpperCase() + rest;
    }  // using such blocks do not make any performance difference;
    if (/^FOO:/.test( str )) {
        return str;
    }
    return str.slice( 4 );
}

/// const

var a  = "Suzan";
a = "all"; //// ok

const myA = a;
// myA = "Suzy"  /////Type Error
const b = [1, 2];
b[1] = 3; // allowed-
console.log(b);// [1, 3]


// summary 
// var > let(when needed) > const (for some primitive and immutable values(strings. numbers, booleans))


// Hoisting

var studentA;
var teacherA;
studentA; // xxx
teacherA; // xxx

studentA = " You ";
teacherA = " Kyle ";

// another way

teacherd(); // kyle
// otherTeacher(); // ??
function teacherd() {
    return "kyle";
}

var otherTeacher = function(){
    return "Suzy"; 
};

// call function after defining them 

x = 5;
var x;
console.log(x);
// this is hoisitng, assigning before it is declared

// in functions

var againTeachers = "Again Kyle";
otherTeacher1();  // undefined
function otherTeacher1() {
    console.log("tis",againTeacher); // undefinded
    var againTeacher = "Suzy";
}


// examples for var and function hoisting
// var hoisting?
// usually bad :/
teacher5 = "si";
var teacher;

// function hoisting?
// IMO actualy pretty useful
getTeacher32(); // "si"

function getTeacher32() {
    return teacher;
}
// let does not hoist

{
    // teacher0 = "Kyle"; // TDZ error
    // let teacher0;
}

// let does not hoist ? false 

// var teacher0 = "Kyle";
// {
//     console.log(teacher0); // TDZ err
//     let teacher0 = "Suzy";
// }


// hoisting exercises