// Typescript // Flow and type-aware linting

/// benefits 
// 1. catch type-relate mistake
// 2. communicate type intent
// 3. provide IDE feedback


// caveats
// 1. Inferencing is the bst-guess, not a guarantee
// 2. Annotation are optional
// 3. Any part of the application that is not typed introduces uncertainty


// Examples Typescriopt and flow

var teacher = "kayle";
// var teacher:string = "kayle";
// ...

// teacher = {name: "kayle" };
// Error: can't assign object 
// to string
console.log(teacher);


// another examples

// do not wonder this code is in the style of typescript and flow, if it is having some bugs when i run it with js extension

type student  = { name : string };

// function getName( studentRoc: student):string {
//     return studentRoc.name;
// }

var firstStudent: student = { name: "Frank" };

// var firstStudentName: string = getName(firstStudent);
// console.log(firstStudentName);


// another example
var studentN: string = "Alga";
// var studentCount: number = 16 - firstStudent;
// cant subtract string

// typescriot and flow summary

// https://github.com/niieani/typescript-vs-flowtype

// helpfull to solve type problems


// typescript proc and cons
//proc

// they make types more obvious in code

// familiarity: they look like other  language's type systems

// extremely popular these days

// they're very sophisticated and good at what they do



// cons

// they use 'non-js-standard' syntax (or code commands)

// they require a build process, which raises the barrier to entry

// their sophistication can be a intimidating to those without prior formal types experiences

// they focus more on static types (variables , parameters, returns. properties, etc) than value types



// understanding your types

// js has a {dynamic} type system, which uses various forms of coercion for value type conversion, including equality comparisons

// However the prevailing response seems to be : avoid as much of this system as possible , and use === to protect from needing to worry about types

// part of the problem with avoidance of whole swaths of JS like pretending === saves you from needing to know types is that it tents to systemically perpetuate bugs

// you simply cannot write quality js programs without knowing the types involved in your operations

// Alternately, many choose to adopt a different "static types" system layered on top

// while certainly helpful in some respects this is avoidance of a different sort