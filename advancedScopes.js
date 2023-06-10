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



// function scoping

// ..



// IIFE Pattern