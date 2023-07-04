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