// Motivations
/* 
1.Only standard js syntax
2. Compiler and Runtime both optional
3.Completely Configurable (ie.Eslint)
4. Main focus: inferring or annotating value: Optional: "static typing"
5. with the grain of JS, not against it


*/

var teacher = "Kyle";

// ..

teacher = {name: "kyle" };
// error cannot assign =object to string // this error is given in typl not in js, 

// 

var teacher1 = string`Kyle`;

//..

teacher1 = { name: string`Kyle` };
// error: cannot assign  an object
// to string 

// another way of the last lines

teacher1 = Object`${{ name : string`Kyle`}}`;
// can't assign obj 
// to string

// 

var student = { age: int`42` };

var studentAge = number`${student.age}` + number`1`;

console.log(studentAge);


// function getName(studentRec = { name = string }) {
//     return studentRec.name;
// }

// var  firstStudent = { name: string`Frnak`};

// var firstStudentName = getName(firstStudent);

// it is written ofr typl but it is having some errors so i do not know© 2023 GitHub, Inc.

