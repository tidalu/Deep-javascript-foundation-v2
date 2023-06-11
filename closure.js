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
