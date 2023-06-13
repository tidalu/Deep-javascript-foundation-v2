// closure
// closure is when a function remembers it's lexical scope even when the function is executed outside that lexical scope 

function ask(queston) {
    return function holdAMinute(){
        console.log(queston); // closure is happening here, queston is first functions arg, but is can be accessed inner function it is a  closure;
    };
}

// ask("what is a closure!");

var myQuestion = ask("What is a closure!");

// ..

myQuestion(); // this is calling closure



/// closure over variables 

var teacher = "Kyle";

var myTeacher = function(){
    console.log(teacher);

};

teacher = "Suzry";

myTeacher();


///

// modular pattern

var workshop = {
    teacherAzam: "Kayle",
    ask(question) {
        console.log(this.teacherAzam,question);
    },
};

workshop.ask("is this a module?"); // this is nto a module, cuz modular pattern requires the concept of encapsulation

// the idea op module,there are thing are public, that is your public API, and there are things that are private, there is an idea of visibility, even if if hte only visibility notion is either public or private that is still an incantation of the idea of encapsulation


// classic module encapsulates the data and behavior(methods) together. the state(data) of a module is held by its methods via closures

// you do not have a module if u don't have a closure

// this is real module 

var workShop = (function Module(teacher){
    var publicAPI = { ask, };
    return publicAPI;

    // ***

    function ask(question) {
        console.log(teacher, question);

    }
})("Kyle");

workShop.ask("it is a simple module, right?");  // here we cannot ask teh teacher cuz teacher is hidden

// es6 modules 
// to run this module we should use mjs extension
// var person = "Kyle";

// export default function ask(question) {
//     console.log(person, question);
// };
// if u use there a export it is public, otherwise it is private

// it is impossible to have more than one module in es6 file


// to bring the module to our file there are two major styles of import

// one

// import {ask} from "module.mjs";

// ask("it is sunny day man");

// second

import askH from './module.mjs';
askH("My mate, how are you?");
