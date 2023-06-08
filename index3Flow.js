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
function getName(studentRoc) {
    return studentRoc.name;
}
var firstStudent = { name: "Frank" };
var firstStudentName = getName(firstStudent);
console.log(firstStudentName);
// another example
var studentN = "Alga";
var studentCount = 16 - firstStudent;
