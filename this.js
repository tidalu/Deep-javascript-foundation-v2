//this keyboard

// a function's this references the execution context for that call. determined entirely by how the function was called


// a this - aware function can thus have  a different context each time it's called/ which makes it more  flexible and reusable

var teacher ="kyle";

function ask(question){
    console.log(teacher, question)
};

function otherClass(){
    var teacher = "Suzy";

    ask("WHy");
}

otherClass();

// another

function ask1 (question){
    console.log(this.teacher, question);
}

function otherClass1() {
    var myContext = {
        teacher: "Suzy"
    };


    ask.call(myContext, "why"); // suzy wahy
}

otherClass1();

// namespace pattern

var workshop = {
    teacher: "Kyle",
    ask(question) {
        console.log(this.teacher, question);
    },
};

workshop.ask("Why so man?");


// another examples

function askQ(question) {
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "alsa",
    ask: askQ,
};

var workshop2 ={
    teacher: "Ulugbek",
    ask: askQ,
};


workshop1.ask("how do i share methods?");
workshop2.ask("How do i share methods?");

// to call these methods second way with .call let's seee

askQ.call(workshop1, "are u enjoying?");
askQ.call(workshop2, "yea, u are really enjoying!");

// losing this keyword

var workshop3 = {
    teacher: "Kulio",
    ask(question) {
        console.log(this.teacher, question);
    },
};

// loosing our this in this example

setTimeout(workshop3.ask,10,"did u loose this?");

// finding this 

setTimeout(workshop3.ask.bind(workshop3), 10, "yea u found that?");
// it is called hard binding

