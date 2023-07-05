// scope

//  --- nested scope
//  --- Hoisting
//  --- Closure
//  --- Modules

// scope: where to look for things

x = 42;
// console.log(y);

// what is it what we are looking for

// javascript organizes scopes with functions and blocks

// compilation and scope

var teacher = "Kayle";

function otherClass() {
    var teacher = "Suzy";
    console.log("Welcome!");
}

function ask() {
    var question = "Why?";
    console.log(question);
}

otherClass();
ask();

// 'use strict';

var teacher1 = "Alif";

function otherClass1() {
    teacher1 = "Suzy";
    topic = "React";
    // console.log(topic);
    // here u can see we have noy declared topic as a  formal variable  anywhere. but, it can be logged in thr console, why, it is js, while executing the code, when we ask the global scope about the topic but it says i have not heard of one, but i can create for u and return it as a variable ,so we can  log, adn we dont see any err mest
    console.log("Welcome!");
}
otherClass1();

teacher1;
topic;

// nested scope

var teacher2 = "LILO";

function otherClass2() {
    var teacher2 = "SUZY";

    function ask1(question) {
        console.log(teacher2, question);
    }

    ask("Why?");
}
otherClass2();
// ask1("???");

// undefined vs undeclared

// undefined is exist but does not have a value
// / undeclared is completely not declared

console.clear();

console.log(xwer);
// let xwer = 5;
var xwer = 5;
// const xwer = 5;

var a = 1;
function b() {
    a = 10;
    return a;
}
console.log(b());
b();

function test() {
    console.log(a);
    var a = "Hello, world!";
}
console.log(test());

f = "Hello";
function f() { }
console.log(typeof f);


var foo = function() {
    console.log('first');
}
console.log(foo());


var foo = function() {
    console.log('second');
}
console.log(foo());


var v = function() {
    return 'Hello world!';
}
console.log(v());

function test() {
    console.log(x);
    var x = 5;
    console.log(x);
    var x = 10;
}
test();

// console.log(a());
var a = 3;
// console.log(a());  // not a function

function foo() {
    bar();
    function bar() {
        console.log('Hello, world!');
    }
}
console.log(foo());
// bar();

var a = 1;
function b() {
    a = 10;
    var a;
    console.log(a);
}
b();

function outer() {
    inner();
    function inner() {
        console.log(foo);
        var foo = 'Hello';
    }
}
outer();