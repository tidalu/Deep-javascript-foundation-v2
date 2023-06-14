var teacher = "Kyle";

function ask(question) {
    console.log(this.teacher, question);
}

ask("What's the non-strict mode default?");



//

var workshop = {
    teacher: "Kyle",
    ask: function ask(question) {
        console.log(this.teacher, question);
    },
};

new ( workshop.ask.bind(workshop))("what is happening now?");

// determination of teh this keyword 
// 1. is the function called by new?
// 2. ia the function called by call() or apply()?
//      .note: bind() effectively uses the apply()
// 3.is the function called on a context object? like workshop.ask()
// 4. Default: global object(except strict mode)