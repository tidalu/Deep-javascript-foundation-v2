// revision from [wtfjs]()
// notation 

1 + 1; // 2

const foo = function () { } // assigning a function to a variable



// [] is equal to ![]

'[] == ![]' // -> true
    // The abstract equality operator converts both sides to numbers to compare them, and both sides become the number 0 for different reasons. Arrays are truthy, so on the right, the opposite of a truthy value is false, which is then coerced to 0. On the left, however, an empty array is coerced to a number without becoming a boolean first, and empty arrays are coerced to 0, despite being truthy.

    + [] == + ![]
0 == + false
0 == 0
true


// 
// [] is truthy but not true

// true is not equal to ![], but not equal to [] too 

true = [] // -> false
true == ![]; // -> false

// [] -Number-> 0 -Boolean-> false
// ![] -bool-> falsy -Number-> 0 -> false

//real explanation according to spec

true == [] // false
toNumber(true); // -> 1
toNumber([]); // -> 0



// true is false

!!"false" == !!"true" // true
!!"false" === !!"true" // true


// explanation 
// true is 'truthy' and represented by a value 1( number ), 'true' in string form is NaN
true == "true"; // -> false
true == "false"; // -> false


// 'false' is not empty string, so it is truthy value, so
!!"false"; // ->   true
!!"true"; // ->    true


// let us check baNaNa out 

"b" + "a" + +"a" + "a"; // => baNaNa

"foo" + +"bar"; // -> 'fooNaN'

// explanation
// 'foo' + (+'bar'), which +'bar' evaluates NaN


// NaN is not a NaN

NaN === NaN; // -> false
// explanation
//  1. if Type(x) is different from Type(y), return false
//  2. uf Type(x) is Number, then
// . if x is NaN, return false
// . if y is NaN, return false
// . .... ... ... 


// following the definition of NaN from IEEE:
// Four, greater than, and unordered. THe last case arises when at least one opened is NaN. every NaN shall compare  unordered with everything , including itself
//  even if NaN it all the time NaN it is like, mystery numbers, like we know only it is mystery number, but we do not know it's value, and so they are not equal


// Object.is()  and === weird cases
// Object.is() determines if two value have the same value or not, it works similar to the === operator but there are few weird cases

Object.is(NaN, NaN); // > true
NaN === NaN; /// -> false

Object.is(-0, 0); // -> false 
-0 === 0; // -> true

Object.is(NaN, 0 / 0); // -> true
NaN === 0 / 0; // -> false


// explanation 

// NaN's have the same value but they are not equal strictly, NaN === NaN being false is apparently due to historical reasons so it would be probably be better to accept it as it is.

// similarly, -0 and 0 are strictly the same m but they are not the same value



// it is a fail

(![] + [])[+[]] + (![] + [])[+!+[]] + ([![]] + [][[]])[+![] + [+[]]] +
    (![] + [])[!+[] + !+[]]  //-> 'fail'

// explanation

// by breaking it into pieces , we notice that by the following pattern occurs often

![] + []; // -> 'false'
![]; // -> false

![] + [].toString(); // 'false'


//  [] is truthy , but not true

// An Array is a truthy value, however it is not equal to true 
!![] // -> true

// Null is falsy but not false
!!null; // -> false
null == false; // -> false

// at the same time , the other falsy values like, 0 or '' are equal to false

0 == false; // -> true 
"" == false; // -> true


// document.all is an object but it is undefined
// document.all is an arraylike object and it gives access to the DOM nodes in the page, it responds to the typeof function as undefined 
document.all instanceof Object; // -> true
typeof document.all; // -> undefined

// but at the same time document.all is not equal to 
document.all === undefined; // -> false
document.all === null; // -> false

// but at the same time : 
document.all == null; // true


/// Minimal value is greater than zero

Number.MIN_VALUE > 0; // -> true

// Number.MIN_VALUE is 5e-324 , the smallest number positive that can be represented within float precision

// it is very close to zero 
// it defines the best resolution that floats can give you

// now the overall smallest value si Number.NEGATIVE_INFINITY although it is not really numeric in a strict sense;



// function is not a function


// declare a class which extends null
class Foo extends null { }
// -> [Function : Foo]

new Foo() instanceof null;
// > TypeError: function is not a function
// > at .. .. ..


// this is not any part of the specification, it is just a bug tha has now been fixed , so may not be a problem in the future


// super constructor null of Foo is not a constructor

class Foo extends null{ }

new Foo() instanceof null;
/// > TypeError: super constructor null of Foo is not a constructor

// this is not a bug because: 
Object.getPrototypeOf(Foo.prototype); // -> null


// if the class has no constructor the call from prototype cahin, but in the parent has not constructor. Just in case< i will clarify that Null is an object :::
typeof null === 'object'

// therefore, you can inherit from it (although in the world of the OOP for such terms would have beaten me.) sop you cannot call the null constructor. If you change this code.          

class Foo extends null {
    constructor() {
        console.log("something")
    }
}

// you see the error:

// Must call super constructor in derived class before accessing 'this' of returning from derived constructor

// and if you add super: 

class Foo extends null {
    constructor() {
        console.log(111)
        super()
    }
}

// js throws an error: Super constructor null of Foo is not a constructor


// Adding two arrays

[1, 2, 3] + [4, 5, 6] // -> '1, 2, 34 , 5, 6'


// Explanation 

[1, 2, 3] + [4, 5, 6][
    // call toString()
    (1, 2, 3)
].toString() + [4, 5, 6].toString();
// concatenation
"1, 2, 3" + "4, 5, 6"
    // -> 
    ("1, 2, 34 , 5, 6")


// Trailing commas in array 

// you have created an array with 4 elements. Despite all, you will get 3 elements, because of trailing commas.


let a = [, , ,]
a.length; // -> 3
a.toString(); // -> ',,'


// triling commas(sometimes called "final commas") can be useful when adding new elements, parameters, or properties to Javascript code. If you want to add a new property, you can simply add a new line without modifying the previous last line if that line already uses a trailing comma. this makes version-control diffs cleaner and editing code might be lett troublesome.


const fruits = ['apple', 'banana', 'orange',]; // trailing 
console.log(fruits.length);// o: 3

const numbers = [
    1,
    2,
    3, // trialing comma after 3
]

console.log(numbers.length); // output: 3

const person = {
    name: 'John',
    age: 30,
    city: 'New york',
}; // trailing comma after city
console.log(person.name); // output: 'john'

const car = {
    brand: 'tesla',
    model: 'Model 3',
    year: 2022, // trailing comma after year 
}

console.log(car.model); // output: 'Model 3'

function addNumbers(a, b, c,) {//trailing come after c,
    return a + b + c;
}

console.log(addNumbers(1, 2, 3)); // 6



// Array equality is a monster

[] == '' // -> true
// [] == 0 // -> true
[''] == '' //-> true
    [0] == 0 // -> true
    [0] == '' // -> 
    [''] == 0 // ->  true

    [null] == ''  // -> true
    [null] == 0 // -> true
    [undefined] == '' // -> true
    [undefined] == 0 // -> true

    [[]] == 0; // -> true
[[]] == ''; // -> true

[[[[[[]]]]]] == '' // -> true
[[[[[[]]]]]] == 0  // -> true

    [[[[[null]]]]] == 0   // -> true
    [[[[[null]]]]] == ''  // -> true

    [[[[[[undefined]]]]]] == 0    // -> true
    [[[[[[undefined]]]]]] == ''   // -> true

//  Explanation

// https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison



//  undefined and Number 

// if we do not pass any argument into the Number constructor, we will get 0.
// The value undefined is assigned to formal argument when there are no such actual arguments, so might  expect that number  without arguments takes undefined as a  value of its parameter. however , when we pass undefined , we will get NaN.


// Explanation 
// according to the specification 

// if no arguments weer passed to this function's invocation  let n be +0
// else  let n be ? toNumber(value)
// in case of undefined, toNumber(undefined) should return NaN



// parseInt is a bad guy 

parseInt("f*ck"); // -> NaN
parseInt("f*ck", 16); // -> 15

// Explanation: this happens because parseInt will come parsing character by character until it hits a character it does not know. the f in "f*ck" is the hexadecimal digit 15.

// parsing Infinity to integer is something

//
parseInt("Infinity", 10); // -> NaN
// ...
parseInt("Infinity", 18); // -> NaN
parseInt("Infinity", 19); // -> 18  
// ...
parseInt("Infinity", 23); // -> 18...
parseInt("Infinity", 24); // -> 151176378
// ...
parseInt("Infinity", 29); // -> 385849803
parseInt("Infinity", 30); // -> 13693
557269
// ...
parseInt("Infinity", 34); // -> 28872273981
parseInt("Infinity", 35); // -> 1201203301724
parseInt("Infinity", 36); // -> 1461559270678...
parseInt("Infinity", 37); // -> NaN 


// be careful with parsing null with
parseInt(null, 24); // -> 23


// do  not octals 
parseInt("08"); // 8 if support ECMAScript 5
parseInt("08"); // 0 if not support ECMAScript 5


// parseint always convert input to string

parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
Number({ toString: () => 2, valueOf: () => 1 }); // -> 1



// Be careful while parsing floating point values

parseInt(0.000001); // -> 0
parseInt(0.0000001); // -> 1
parseInt(1 / 1999999); // -> 54

// parseInt takes a string argument and returns an integer of the specified radix. parseInt also strips anything after an including the first non-digit in the string parameter. 0.000001 is converted to string "0.000001" and parseInt returns 0. when 0.000001 is converted to a string it is treated as "1e-7" and hence parseInt returns 1.1/1999999 is interpreted as 5.00000250000125e-7 and parseInt returns 5



// Math with true and false 

true + true; // -> 2
(true + true) * (true + true) - true; // -> 3

// explanation 
// we can coerce value to numbers with Number constructor. It is quite obvious that true will be coerced to 1.
Number(true); // -> 1

// the  unary + operator attempts to convert its value into a number . it can convert string representation of string and floats, as well as the non-string vales true, false , and null . if it cannot parse a particular value , it will evaluate to NaN> that means we can coerce true to 1 easier: 

+true; // -> 1

// if the argument is true return 1, if argument is return +0.

// that's why we can add boolean values to numbers and we can get the correct results




// -------------------------------------------------------


// HTML  comments are valid in Javascript 
// valid comment
// <!-- valid comment too --> // loooks like not


//  NaN is not a Number 

typeof NaN; // -> 'number'



// [] and null are objects 
typeof []; // -> object
typeof null; // -> object

// however 
null instanceof Object; // -> false


// However you can check the type of the object by using toString method

Object.prototype.toString.call([])
//-> '[object Array]'

Object.prototype.toString.call(new Date())
// -> '[object date]'

Object.prototype.toString.call(null)
// -> '[object Null]'




//  Magically increasing Numbers 
999999999999999; // -> 999999999999999
9999999999999999; // -> 10000000000000000

10000000000000000; // -> 10000000000000000
10000000000000000 + 1; // -> 10000000000000000
10000000000000000 + 1.1; // -> 10000000000000002


// Explanation  
// This is caused by IEEE 754-2008 standard for Binary Floating-Point Arithmetic. At this scale, it rounds to the nearest even number


// precision of 0.1 + 0.2

0.1 + 0.2; // -> 0.30000000000000004
0.1 + 0.2 === 0.3; // -> false




// PATCHING NUMBER

Number.prototype.isOne = function () {
    return Number(this) === 1
}

    (1.0).isOne(); // true 
(1).isOne(); // true
(2.0).isOne(); // -> false
(7).isOne(); // -> false


// 






// comparison of three numbers 

1 < 2 < 3; // true
3 > 2 > 1; // false

// Explanation

1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // -> true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // -> false


// Funny math

3 - 1  // -> 2
3 + 1  // -> 4
'3' - 1  // -> 2
'3' + 1  // -> '31'

'' + '' // -> ''
// [] + [] // -> ''
{ } +[] // -> 0
// [] + {} // -> '[object Object]'
{ } + {} // -> '[object Object][object Object]'

'222' - -'111' // -> 333

[4] * [4]       // -> 16
    // [] * []         // -> 0
    [4, 4] * [4, 4] // NaN


// Number  + Number  -> addition
// Boolean + Number  -> addition
// Boolean + Boolean -> addition
// Number  + String  -> concatenation
// String  + Boolean -> concatenation
// String  + String  -> concatenation


// What about other examples? A ToPrimitive and ToString methods are being implicitly called for [] and {} before addition. Read more about evaluation process in the specification:

// 12.8.3 The Addition Operator (+)
// 7.1.1 ToPrimitive(input [,PreferredType])
// 7.1.12 ToString(argument)


// Notably, {} + [] here is the exception. The reason why it differs from [] + {} is that, without parenthesis, it is interpreted as a code block and then a unary +, converting [] into a number. It sees the following:

// {
//   // a code block here
// }
// +[]; // -> 0
// To get the same output as [] + {} we can wrap it in parenthesis.

// ({} + []); // -> [object Object]

// Addition of the RegExps

// Patch a toString method

RexExp.prototype.toString =
    function () {
        return this.source;
    } /
    7 /
    -/5/; // -> 2



// Strings are not instance of String 

"str"; // -> 'str'
typeof "str"; // -> 'string'
"str" instanceof String; // -> false


// the String constructor returns a string

typeof String("str"); //  -> 'string'
String("str"); // -> 'str'
String("str") == "str"; // -> true

// let us try with a new

new String("str") == "str"; // -> true
typeof new String("str"); // -> 'object'

// object what is that?

new String("str"); // -> [String: 'str']



// calling functions with backticks

function f(...args) {
    return args;
}

f(1, 2, 3); // -> [ 1, 2, 3 ]

// but  we can call any function with backticks 

f`true is ${true}, false is ${false}. array is ${[1, 2, 3]}`;
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   false,
// ->   true,
// ->   [ 1, 2, 3 ] ]




// call call call

console.log.call.call.call.call.call.apply(a => a, [1, 2]);



// A constructor property 

// const c = "constructor";
c[c][c]('console.log("WTF")')(); // -> WTF

// Explanation
// Declare a new constant which is a string 'constructor'
const c = "constructor";

// c is a string
c; // -> 'constructor'

// Getting a constructor of string
c[c]; // -> [Function: String]

// Getting a constructor of constructor
c[c][c]; // -> [Function: Function]

// Call the Function constructor and pass
// the body of new function as an argument
c[c][c]('console.log("WTF?")'); // -> [Function: anonymous]

// And then call this anonymous function
// The result is console-logging a string 'WTF?'
c[c][c]('console.log("WTF?")')(); // > WTF?

// An Object.prototype.constructor returns  a reference to the Object constructor  function that created the instance object . In case with strings it is String, in the case with numbers it is Number and so on


// Now, step-by-step:

// [...'...']             // -> [ '.', '.', '.' ]
// [...[...'...']]        // -> [ '.', '.', '.' ]
// [...[...'...']].length // -> 3
// Obviously, we can spread and wrap the elements of an array as many times as we want:

// [...'...']                 // -> [ '.', '.', '.' ]
// [...[...'...']]            // -> [ '.', '.', '.' ]
// [...[...[...'...']]]       // -> [ '.', '.', '.' ]
// [...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// // and so on …



// Labels
foo: {
    console.log("first");
    break foo; console.log("second");
}
// > first// -> undefined


let str = '';

loop1:
for (let i = 0; i < 5; i++) {
    if (i === 1) {
        continue loop1;
    }
    str = str + i;
}

console.log(str);
// Expected output: "0234"



// Nested labels
a: b: c: d: e: f: g: 1, 2, 3, 4, 5; // -> 5


// Insidious try..catch
(() => {
    try {
        return 2;
    } finally {
        return 3;
    }
})(); //  -> 3


// Arrow function cannot be a constructor 

let f = function () {
    this.a = 1;
};
new f(); // -> f { 'a': 1 }

// now try do to the same with an arrow function: 
let f = () => {
    this.a = 1;
}

new f(); // -> TypeError: f is not a constructor

// Arrow functions cannot be used as constructors and will throw an error when used with new. Because they have a lexical this, and do not have a prototype property, so it would not make much sense.

// arguments and arrow functions

let f = function () {
    return arguments;
};
f("a"); // -> { '0': 'a' }

// now we will try it with arrow functions
let f = () => arguments;
f("a"); // -> Uncaught ReferenceError: arguments is not defined

// as a  valid alternative use the rest parameters to achieve the same result:

let f = (...args) => args;
f("a");

// truck return 

// return statement is also tricky
(function () {
    return
    {
        b: 10;
    }
})(); // undefined

// explanation

// return and the returned statement must be in the same line;//

(function () {
    return {
        b: 10
    };
})(); // -> { b: 10 }

// this is because of a concept called Automatic Semicolon insertion, which automatically inserts  semicolons after most newlines, in the first example there is a semicolon inserted after return so teh function returns undefined and the object literal is never evaluated

// Number.tofixed() display different numbers 
// Number.toFixed() can behave a bit strange in different browsers. Check out this example:

(0.7875).toFixed(3);
// Firefox: -> 0.787
// Chrome: -> 0.787
// IE11: -> 0.788
(0.7876).toFixed(3);
// Firefox: -> 0.788
// Chrome: -> 0.788
// IE11: -> 0.788