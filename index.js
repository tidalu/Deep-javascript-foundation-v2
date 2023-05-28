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





if(!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        var xNegZero = isNegZero(x);
        var yNegZero= isNegZero(y);

        if(xNegZero || yNegZero){
            return xNegZero && yNegZero;
        }
        else if( isItNaN(x) && isItNaN(y)){
            return true;
        }else {
            return x === y;
        }
        // 

        function isNegZero(v) {
            return v == 0 && (1 / v) == -Infinity;
        }

        function isItNaN(v) {
            return v !== v;
        }
    }
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
    


    //

    // day 2/

    // fundamental  Objects
    // it was called differently before:
        // built-in objects
        // NATIVE functions

    // usr new{keyword}: in these:
        // --- Object() like new Object
        // --- Array() -> we know there , we mostly create new array using new keyword -> const arr = new Array()
        // --- Function() 
        // --- Date()
        // --- RegExp()
        // --- Error()

    // don's use new:
        // --- String()
        // --- Number()
        // --- Boolean()

    // examples

    var yesterday = new Date('March 6, 2019');
    console.log(yesterday.toUTCString()); // Tue, 05 Mar 2019 23:00:00 GMT
    


    var myGPA = String(/* gpa */);
    // "3.54"

    ////////////////////////////////////////////
    /////////// Abstract operation/////////////
    ///////////////////////////////////////////

    // first abstract operation
    
    // ToPrimitive(hint)  -> (7.1.1)


    // hint : 'Number'
        // first it check valueOf() if it is there
        // then toString()

    // hint : 'string'
        // first -> toString()
        // then valueOf()

        // second abstract operation
        // toString   -> (7.1.12)
        // .def -> it takes the any value, and it returns the string representation of that value

        // examples for ToString

        // null -> "null"
        // undefined -> "undefined"
        // true -> "true"
        // false -> "false"
        // 2.14159 -> "3.14159"
        // 0 -> "0"
        // -0 -> "-0"


        //

        // ToString(object) -> if we call ToString on an object it is going to invoke the toPrimitive with the string hint
        // ToPrimitive(string)

        // aka: toString / valueOf()

        // what is it look like on examples

        // []   ->   ""
        // [1,2,3]   -> "1,2,3"
        // [null, undefined]    ->   ","
        //
        // [[[],[],[]],[]]    -> ",,,"
        // [,,,,]     ->    ",,,"


        // {}   ->  "[object Object]"
        // {a:2}  ->  "[object Object]"
        // {tostring(){return "x";}}  ->  "x"




        // third abstract operation is
        // ToNumber()

        /* 
        ""   -> 0
        "0"   -> 0
        "-0"   -> -0 
        " 009   "   -> 9
        "3.14159"   -> 3.14159
        "0."   -> 0
        ".0"   -> 0
        "."   -> NaN
        "0xaf"   -> 175



        false   -> 0
        true   -> 1
        null   -> 0
        undefined   -> NaN


        ToNumber (object):
        ToPrimitive (number) 
            // aka: valueOf() / toString()

        (for any [] and {} by default)
        value)f(){ return this;}
        */


        //  ---> ToString

        /*
        [""]   --->  0
        ["0"]   --->  0
        ["-0"]   --->  -0
        [null]   --->  0
        [undefined]   --->  0
        [1, 2, 3]   --->  NaN
        [[[[[]]]]]   --->  0
        
        object

        {...}    --->  NaN
        {valueOf(){
            return 3
        }}              ---> 3
        */




        //// i think we can to the fourth abstract operation
        // ---> ToBoolean

        /*
        this operation is less algorithmic and more lookup
        Truthy or Falsy
        Falsy values list:
        ""
        0, -0, 
        null, 
        NaN, 
        false, 
        undefined


        truthy values list is more, except falsy values everything is truthy: a bit common examples
        'foo'
        23
        { a:1 }
        [1, 2]
        true
        function(){}
        ...
        */



        //// ---> Coercion

        // you claim to avoid  coercion because it is evil but,,,
        // let's see examples
        var numStudents = 16;
        console.log(
            `There are ${numStudents} students.`
        );


        // there is one coercion happening. look we are getting student count in Number but when we use template string we are coercing number to string implicitly

        var msg1 = "There are ";
        numStudents = 17;
        var msg2 = " students.";
        console.log(msg1 + numStudents + msg2);
            // here also we are adding number to string

        // the plus operator either performs string concatenation or numeric addition
        // then let's see in the examples above what magic is happening, in the expression if one of them is a string then it si gonna call toString to other and coercion happens there and To string convert number into string, and after everything is done with being converted to a string then addition operator does it's job  let's see another version of the magic

        numStudents = 18;
        console.log(
            `There are ${[numStudents].join('')} students.`
        );

        // there  is using only join output will be a string

        // there is another way to do it let's see

        numStudents = 10;
        console.log(
            `There are ${numStudents.toString()} students.`
        ); // this is well formed
        
        // another better way using fundamental object without an new keyword;

        numStudents = 19;
        console.log(
                `There are ${String(numStudents)} students.`
        )

        // okay okay what about other wau
        function addAStudent(numStudents) {
            return numStudents + 1;
        }
                    // okay  here ve go with second side of the function if we do decrement instead of the increment it only does two Number operation
                    function addAStudent1(numStudents) {
                        return numStudents - 1;
                    }
        
        const studentInput = document.querySelector('.input');
        const button = document.querySelector('.button')
        button.addEventListener('click', () => {
            console.log(typeof addAStudent(studentInput.value));   // ---> "161"
            
            // okay okay there is a way to force it to do a number operation

            console.log(addAStudent(
                +studentInput.value // ---> 17
                /// if we put plus in the beginning of it, it invokes two number operation; then output will be 17 it we enter 16;
            ));

            // okay  here ve go with second side of the function if we do decrement instead of the increment it only does two Number operation
            
            // like here 
            console.log(addAStudent1(
                studentInput.value // --> 15
            ))

            // yeah but...
        // recall truthy vs falsy

        if(studentInput.value) {
            numStudents = Number(studentInput.value);
        }

        console.log('student num : ', numStudents);

        })

        

        // while (newstudents.length) {
        //     enrollStudents(newstudents.pop())
        // }  i commented this cuz, i have not declared that array and function


        // lets change the form of writing , 

        if(!!studentInput.value) {
            numStudents = Number(studentInput.value);
        }

        console.log('student num : ', numStudents);

        

        

        // while (newstudents.length > 0) {
        //     enrollStudents(newstudents.pop())
        // }


        console.log(Boolean('')); // false
        console.log(Boolean("  \t\n")); // true OOPs!


        // boolean test on null and undefined

        // var workshop = getRegistration(students);

        // if(workshop) {
        //     console.log(
        //         `Welcome ${student.name} to ${workshop.name}.`
        //     );
        // }

        //////////

        Boolean(undefined); // false
        Boolean(null);  /// false
        Boolean({}); // true


        /// ummm /// boxing

        // DOM returns string but how we access to the .length well this is called Boxing
        if (studentInput.value.length > 50) {
            console.log(
                `Studends name is too long.`
            )
        }

        // but  i think it absolutely in spirit is an implicit coercion
        // it is saying you have this thing that is not an object , and you trying to use it as it is an object, me,. Javascript i ma gonna be helpful and go ahead and make it into an object for you


        // -->>>-  corner cases of coercion
        

        // every language has type conversion corner cases


        // here is the some examples
        Number( "" )   // ---> 0  opps
        Number( " \t\n" ); // --> 0   oops
        Number( null ); // --> 0   oops
        Number( undefined ); // --> NaN
        Number( [] );// --> 0  oops
        Number( [1,2,3] ); // -->  NaN
        Number( [null] ); // --> 0   oops
        Number( [undefined] ); // --> 0  oops
        Number( {} );// --> NaN
        

        String( -0 ); // --> "0"   oops
        String( null );// --> 'null'
        String( undefined ); // --> "undefined"
        String( [null] ); // --> ""  oops
        String( [undefined] ); // --> ""   oops
        Boolean( Boolean(false) ); // --> true  /// oops


        // root of all coercion evil

        studentInput.value = "";
        //..
        Number(studentInput.value); // 0
        studentInput.value = "    \t\n";
        //..
        Number(studentInput.value);  /// 0




        // here is the worst case of using 0 and 1 for boolean coercion

        Number(true);  // 1
        Number(false);  // 0
        
        1 < 2; // true 
        2 < 3; // true
        1<2<3;  // true //(but ...) 

        (1< 2) < 3;
        (true) < 3;
        1 < 3; //  true (hmm,,,)

        // ********************

        3 > 2; //  true
        2 > 1; // true
        3 > 2 > 1