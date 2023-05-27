console.log('hello world');

var x = 40;

x++; // return then update // 40
x;  //41

++x; // first update then return //42
x; // 42




var y = '5';
x = x + 1; // '51'


var z = '5';
z++; // 5
z; //6



///  x++ means:

function plusPlus(orig_x)  {
    var orig_x_coerced = Number(orig_x);
    x = orig_x_coerced + 1;
    return orig_x_coerced;
}

// three pillars of javascript

/*
Types 
    Primitive Types
    Abstract operations
    Coercion 
    Equality
    TypeScript, Flow, etc.

Scope 
    Nested Scope
    Hoisting
    Closure
    Modules

Objects (Oriented) 
    this
    class {}
    Prototype
    00 vs 0L00
*/




// =========== Types ============ //

// in Javascript, everything is an object -> False


// primitive types
    // Undefined, Null, Boolean,String, Symbol, Number, Object



    // Undefined
    // String
    // Number 
    // Boolean
    // Object
    // Symbol
// ---------------------------------------------
    // acts like an type >>>
    // Undeclared ?
    // bigint?
    // Null?  

    // Object
    // Function?  >  these three are objects the rest are not
    // Array? >>



    var v;
    typeof v;   // undefined

    v = '1';
    typeof v; // string

    v = 2;
    typeof v; // number

    v = true; 
    typeof  v;  // boolean

    v = {};
    typeof v; // object

    v = Symbol(); 
    typeof v; // Symbol;


    typeof doesntExist; // undefined

    var v = null; // 'object' OOPS!

    v = function(){};
    typeof v; // 'function'  hmm!?

    v = [1, 2, 3];
    typeof v;  //  'object' hmmm?


    // coming soon
    var v = 42n;
    // of: BigInt(42)
    console.log(typeof v );



    //  undefined -> it is definitely a variable but it the moment it does not have a value
        // vs
    // undeclared -> there is not such variable at all
        // vs
    // uninitialized (aka TDZ(Temporal Dead Zone))



    //special values

    // NaN ('Not a number)

    // the IEEE 754 spec is a set of technical standards for how many numbers represented

    var myAge = Number('0o46'); // 38
    var myNextAge =  Number('39'); // 39
    var myCatsAge = Number('n/a'); // NaN
    myAge - 'my sons age'; // NaN

    myCatsAge === myCatsAge;  // False OOPS!

    isNaN(myAge);  // false
    isNaN(myCatsAge);  /// true
    isNaN('my sons age'); // true OOPS!

    Number.isNaN(myCatsAge); // true
    Number.isNaN('my sons age');  // false  // Number.isNaN value definitely says that is it isNaN value or it is not

    // NaN: invalid number +
    // dont undefined ----
    // null -  ---
    /// false  ---
    // -1 - --
    // 0 ---

    // only NaN is not equal to NaN


    // undefined === undefined


    // negative zero

    // examples

    // var trendRate = -0;
    // trendRate === -0;  /// true

    // trendRate.toString(); // '0'  OOPS
    // trendrate === 0; // true '''OOPS
    // trendRate < 0; // false
    // trendRate > 0; // false

    // Object.is(trendRate, -0);  /// true
    // Object.is(trendRate, 0); /// false


    // Object.is( determines whether two values are the same value, and return boolean respectively)

    Object.is('1', 1); // false

    ////////////////////////
    Math.sign(-3); // -1
    Math.sign(3); // 1
    Math.sign(-0); // -0 WTF?
    Math.sign(0); // 0 WTF?

    // // fix Math.sign()
    // function sign() {
    //     return v !== 0? Math.sign(v) : Object.is(v, -0) ? -1: 1;
    // }

    // sign(-3);// -1
    // sign(3); // 1
    // sign(-0); // -1
    // sign(0); // 1


// console.clear();

// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        var xNeg = isItNegZero(x);
        var yNeg = isItNegZero(y);

        if(xNeg || yNeg) {
            return xNeg && yNeg;
        }else if(isItNaN(x) && isItNaN(y) ){
            return true;
        }else if(x === y) {
            return true;
        } 
        
        return false;
        




    function isItNegZero(x) {
        return x === 0 && (1 / x) === -Infinity;
    }

    function isItNaN(x) {
        return x !== x;
    }

    };
}




    // tests:
    console.log(Object.is(42, 42) === true); //true
    console.log(Object.is("foo", "foo") === true); // true
    console.log(Object.is(false, false) === true); // true
    console.log(Object.is(null, null) === true); // true
    console.log(Object.is(undefined, undefined) === true); // true
    console.log(Object.is(NaN, NaN) === true); // False
    console.log(Object.is(-0, -0) === true); // true
    console.log(Object.is(0, 0) === true); // true

    console.log(Object.is(-0, 0) === false); // 
    console.log(Object.is(0, -0) === false);
    console.log(Object.is(0, NaN) === false);
    console.log(Object.is(NaN, 0) === false);
    console.log(Object.is(42, "42") === false);
    console.log(Object.is("42", 42) === false);
    console.log(Object.is("foo", "bar") === false);
    console.log(Object.is(false, true) === false);
    console.log(Object.is(null, undefined) === false);
    console.log(Object.is(undefined, null) === false);
