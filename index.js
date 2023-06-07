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
    // Object.is(tre
    


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

        // nopt only empty string becomes zero, other all full of empty spaces becomes zero also, this is main corner case 




        // here is the worst case of using 0 and 1 for boolean coercion
/*
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
        3 > 2 > 1  // false OOPS!

        (3 > 2) > 1;
        (true) > 1;
        1 > 1 ; //false
*/
        ///------> Intentional corner cases

        // you do not deal with these type conversion corner cases by avoiding coercions.
        // instead you should adopt a coding style makes value types plain and obvious

        // a quality JS program embraces coercions, making sure the types involved in every operation are clear. Thus, corner cases are safely managed


        // not necessary to do
        // Type Rigidity
        // Static types
        // types soundness

        // Javascript's dynamic typing is not a weakness. it is one of its string qualities

        // but but

        // what about the junior devs?

        // most developers tend to think that -> 
        // implicit mechanisms are magical but it is not true 
        // it is kinda automatic coercion in out code or we can say one type in Types, we saw some more examples for it, bad thing is we just see the result but we do not know what is happening in the background. but it is also very bad, we should think about implicitness as abstracted.

        // hiding unnecessary details , re-forcing the reader and increasing clarity


        // examples

        numStudents = 25 ;
        console.log(
            `There are ${String(numStudents)} students`
        )



        numStudents = 34 ;
        console.log(
            `There are ${numStudents} students`
        )

        // another examples with comparison operators

        var enroll = 12;
        var enroll2 = studentInput.value;

        if(Number(enroll) < Number(enroll2)) {
            console.log('work 0')
        }

        if(enroll < enroll2) {
            console.log('work 1')
        } 

        // here first example we have inputs and we are doing coercion , but if at least one input is a number, operator can make implicit coercion for us maybe we should lett it do it for use and we should omit the Number() primitive type

        /// is showing the reader the extra type details helpful or distracting
        // depends. 

        // if a feature is sometime useful and sometime dangerous and if there is an better option always use the better option  --- it is abstract
        // 1.  useful : when the reader focused on what is important
        // 2. dangerous: when the reader can not tell what will happen
        // 3. better: when the reader understands the code.


        // it is irresponsible to knowingly avoid usage of a feature that can improve code readability


        // examples with coercion
        // TODO: write the validation functions

        const isValidName = (x) => {
            return (typeof x === 'string') ? x !== ''? Array.from(x.split('')).filter(x => x !== ' ').length >= 3? true: false :false :false;
            //  if(typeof x === 'string'){
            //    if(x !== ''){
            //      if(x.trim().length >= 3){
            //        return true;
            //      }
            //  }else {
            //    return false;
            //  }
            // } 
            }

            function isValid (n) {
                if (typeof n === 'string' && n.trim().length >= 3){
                    return true ;

                }return false;

            }

            function hoursAttended2 (x, y) {
                if(
                    typeof x === 'string' && x.trim() != ''
                    ){
                        x = Number(x)
                }
                if(
                    typeof y === 'string' && y.trim() != ''
                    ){
                        y = Number(y)
                }

                if(
                    typeof x == 'number' &&
                    typeof y == 'number' &&
                    y >= 0 &&
                    x >= 0 &&
                    Number.isInteger(x) &&
                    Number.isInteger(y) &&
                    x <= y 
                ){
                    return true;

                }
                return false;
            }

        

            const hoursAttended = (x, y) => {
                return (typeof x === 'string' && typeof y === 'string') || (typeof x === 'number' && typeof y === 'number') ? (typeof (x + y) === 'number') ? x >= 0 || y >= 0 ? x % 1 === 0 && y % 1 === 0 ? x <= y ? true : false : false : false : false: false; // there is an error logical
            }


        // tests:
        console.log(isValidName("Frank") === true);
        console.log(hoursAttended(6,10) === true);
        console.log(hoursAttended(6,"10") === true);
        console.log(hoursAttended("6",10) === true);
        console.log(hoursAttended("6","10") === true);

        console.log(isValidName(false) === false);
        console.log(isValidName(null) === false);
        console.log(isValidName(undefined) === false);
        console.log(isValidName("") === false);
        console.log(isValidName("  \t\n") === false);
        console.log(isValidName("X") === false);
        console.log(hoursAttended("",6) === false);
        console.log(hoursAttended(6,"") === false);
        console.log(hoursAttended("","") === false);
        console.log(hoursAttended("foo",6) === false);
        console.log(hoursAttended(6,"foo") === false);
        console.log(hoursAttended("foo","bar") === false);
        console.log(hoursAttended(null,null) === false);
        console.log(hoursAttended(null,undefined) === false);
        console.log(hoursAttended(undefined,null) === false);
        console.log(hoursAttended(undefined,undefined) === false);
        console.log(hoursAttended(false,false) === false);
        console.log(hoursAttended(false,true) === false);
        console.log(hoursAttended(true,false) === false);
        console.log(hoursAttended(true,true) === false);
        console.log(hoursAttended(10,6) === false);
        console.log(hoursAttended(10,"6") === false);
        console.log(hoursAttended("10",6) === false);
        console.log(hoursAttended("10","6") === false);
        console.log(hoursAttended(6,10.1) === false);
        console.log(hoursAttended(6.1,10) === false);
        console.log(hoursAttended(6,"10.1") === false);
        console.log(hoursAttended("6.1",10) === false);
        console.log(hoursAttended("6.1","10.1") === false);

        // double versus triple equals
        // == -vs.-- ===

        // == checks value (loose)
        // === checks the value abd type (strict)

        // if you are trying to really understand your code , it is critical you learn to think like js

        // actually on the internet they are compared whong, they both check types lets see each
        

        // double equality
            // it is what the spec says about:::

            //The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

            
            // !!!.If Type(x) is the same as Type(y), then
            
            // !!!.Return the result of performing Strict Equality Comparison x === y.
            
            // !!!.If x is null and y is undefined, return true.
            
            // !!!.If x is undefined and y is null, return true.
            
            // !!!.If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
            
            // !!!.If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
            
            // !!!.If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
            
            // !!!.If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
            
            // !!!.If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
            
            // !!!.If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
            
            // !!!.Return false.





            /// triple equality

            //The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

            
            // !!!---If Type(x) is different from Type(y), return false.
            
            // !!!---If Type(x) is Number, then
            
            // !!!---If x is NaN, return false.
            
            // !!!---If y is NaN, return false.
            
            // !!!---If x is the same Number value as y, return true.
            
            // !!!---If x is +0 and y is -0, return true.
            
            // !!!---If x is -0 and y is +0, return true.
            
            // !!!---Return false.
            
            // !!!---Return SameValueNonNumber(x, y).


            var studentName1 = 'Frank';
            var studentName2 = `${studentName1}`;

            var studentShow1 = 16;
            var studentShow2 = studentShow1 + 0;

            console.log(studentName1 == studentName2);
            console.log(studentName1 === studentName2);
            
            console.log(studentShow1 == studentShow2);
            console.log(studentShow1 === studentShow2);

            // all above log true
            // if types match to compare them we can u se both equalities

            // triple equals here, if types are not the same just return false, it s=does not do anything, 

            // in the case, if they are match and if both are null it returns false we covered it above , and if they are -0 and 0 it return true, we also covered it above

            var workshop = {
                name: "Deep JS Foundation"
            };

            var workshop1 = {
                name: "Deep JS Foundations"
            }

            if ( workshop == workshop1){
                console.log('true');
            } else {
                console.log('false');
            }

            if ( workshop === workshop1){
                console.log('tre');
            }else {
                console.log('false');
            }


            // as every other operation coercive is helpful in equality if u really know what the types are;

            // let's look at double equals what to do if the types are different;
            // if x is null and y is undefined or can be opposite, it will return true;
            //  these two only coercive to each other

            // null and undefined have some differences between such as the default value algorithm, but in other most cases we can treat null and undefined as indistinguishable through coercive equality

            workshop = { topic: null };
            workshop1 = {};

            if(
                (workshop.topic === null || workshop.topic === undefined ) && (workshop1.topic === null || workshop1.topic === undefined )
            ){
                //....
            }


            if(
                workshop.topic == null &&
                workshop1.topic == null
            ){
                //...
            }

            // == equality prefers to compare numbers , so if there is an number x and string y , it implicitly call toNumber(y) then it does it 's job

            // let's see some examples, 
            var x = '45';
            var y = 23;

            if(Number(x) === Number(y)) {
                // ..
            }

            // here if we know what inputs are coming exactly. and if they might be different, we cannot use === cuz, we should convert them into numbers, at that time we can use == equaly, cuz it's algorithm works like for numbers, i mean if one of the input is number it implicitly converts the second different input to a number, then it goes, and in the double equals, if both inouts are strings the same, then it does the algorithm of the triple equals, it compares the type

            if(x == y) {
                //...
            }

            // double equals only compares primitives if any is not primitive type then it implicitly use toPrimitive(non)
            