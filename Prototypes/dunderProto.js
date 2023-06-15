function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
};

var DeepJs = new Workshop("Kyle");
DeepJs.constructor === Workshop;

DeepJs.__proto__ = Workshop.prototype;// true
Object.getPrototypeOf(DeepJs) == Workshop.prototype; // true