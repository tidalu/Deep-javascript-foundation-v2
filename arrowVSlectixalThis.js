var workshop = {
    teacher: "Kyle",
    ask(question) {
        setTimeout(() => {
            console.log(this.teacher, question);
        }, 100);
    },
};

workshop.ask("is this lexical this?");

// the proper way to think about what an arrow function is:

// an arrow function does not define a this keyword at all. if u put his keyword in an arrow function, it is gonna behave exactly like any other variable

// an arrow function  is this-bound(aka .bind()) to its parent function

var workshop1 = {
    teacher: "Kyle",
    ask1: (question) => {
        console.log(this.teacher, question);
    },
};
workshop1.ask1("what happenned to this keyword?");
workshop1.ask1.call(workshop1, "still no this");


// only use => arrow functions when u need lexical this.
// https://github.com/getify/eslint-plugin-arrow-require-this

