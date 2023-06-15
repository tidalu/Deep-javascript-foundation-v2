function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
};

var DeepJs = new Workshop("Kyle");


// DeepJs.ask = function(question) {
//     this.ask(question.toUpperCase());// now it is infinite recursioin cuz this is actually DeepJs 
// }

// DeepJs.ask("OOPS is this infinite recursion?")

// let us fix this err(

DeepJs.ask = function(question){
    this.__proto__.ask.call(this, question.toUpperCase());
}

DeepJs.ask("is this fake polymorphism?")
