// prototypes

// Objects  are built by "Constructor calls"(via new)

// A constructor call makes an object based on it's own 




// A constructor call makes an object linked to its own prototypes


function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
};

var DeepJs = new Workshop("Kyle");
var Reactjs = new Workshop("Suzy");

DeepJs.ask("Is prototype a class?");

Reactjs.ask("is not prototype ugly?");

