console.clear();
var hello = 42;
var hello1 = [42];

if (hello == hello1) {
    console.log('1', 'yes')
}

if (42 == '42') {
    console.log('yes');
}
// == it prefers numerification, cuz, it has two options, call toString() and compare strings or calling ToNumber() and compare numbers, but it prefers numbers, string becomes number
// we should avoid corner cases, we should all the compare the same types, atb this time we use triple equals



if (42 === 42) {
    console.log('yes');
}

// summary == 

// if the types are the same : ===
//  if null or undefined: equal
//  if non-primitives: toPrimitive
// prefer: toNumber

// == corner cases

[] == ![] // true wat!?
// this construct is itself is not true construct, u should never compare the empty to its negotiation
// we will never compare the array with it' neg

var arr = [];
var arr1 = [];

if (arr == !arr1) {
    console.log('yep');
}

if (arr != arr1) {
    console.log('yep');
}


//


if (arr == !arr1) { }
if ([] == false) {

}
// if("" == false){}
// if(0 = false){}
// if(0===0){}
if (true) {
    // true what????
}

if (arr != arr1) { }
if (!(arr == arr1)) { }
if (!(false)) { }
if (true) {
    // yep whjat???????
}

//

if (arr) {
    // logs true
}

if (arr == true) {
    // nope :(
}

if (arr == false) {
    // yep :(
}

// if(arr){}
// if(Boolean(arr)){
if (true) {
    // yep
}

// if(arr == true){}
// if("" == true){}
// if( 0 === 1){}
if (false) {
    // Nope:()
}

/*
if(arr == false){}
if("" == false){}
if(0 === 0){}

*/
if (true) {
    // yep }}}
}

// how to avoid these corner cases in ==

// avoid
// 1. == with 0 or ""(or even " ")
// 2. == with non-primitives
// 3. == true or == false: allow toBoolean or use ===


// the case for preferring ==

// Knowing the types is always better than now knowing them
// static types is not the only(or even necessarily best) way to know your types 

// == is not about types without knowing types
// never use the double equals when you don;'t know the types, only use when u know the types
// == is about comparisons with known types , optionally where conversions are helpful

//if u know the types in a comparison :
// if both types are the same, == is identical to ===

// using === would be unnecessary , so prefer the shorter ==

// since === is pointless when the types dont match, it is similarly unnecessary when they do  match

// if u know the types in comparison
// if they are different , using === would be broken


// if u knwo the types they are not mathc, u have two options
// on is not to compare them, 
// secons is to use == 


// if u know the types  in comparison

// if the types are different, the equivalent of one == would be two(or more) === (ie, slower);+

// at this time prefer == is faster

// if the types are different. two of more === comparison may distract the reader

// prefer the cleaner  single ==

// summary: whether the types match or not, == is more sensible choice

// if u dont know the types in a comparison

// not knowing the types means not fully understanding the code

// so best to refactor you can know the types is possible

// the uncertainty of not knowing types should be obvious to reader

// most obvious signal is ===

// also not knowing the types is equivalent to assuming type conversion will occur

// because of corner cases the only safe choice is ===

// summary: if u cannot or wont use know and obvious types, === is the only reasonable choice

// even if  === would always be equivalent to == in your code, using it everywhere sends wrong semantic signal "Protecting myself since i don't know/trust the types"

// summary : making types known and obvious leads to better code. if types are known, == is the best, otherwise, fallback to ===

// Exercises of equality

// TODO: write `findAll(..)`

function findAll1(value, arr) {
    var newArr = new Array();
    for (var i = 0; i < arr.length; i++) {
        if (Object.is(arr[i], value)) {
            newArr.push(arr[i]);
        }
        if (typeof value == "string") {
            if (Number(value) == arr[i]) {
                newArr.push(arr[i]);
            } else if (value.split(' ').length == 0 && arr[i].split(' ').length == 0) {
                newArr.push(arr[i]);
            }
        } else if (typeof value == "number" && isNaN(value) && !value == Infinity) {
            if (String(value) == arr[i]) {
                newArr.push(arr[i]);
            }
        } else
            if (value == null || value == undefined) {
                if (arr[i] == null || arr[i] == undefined) {
                    if (value == arr[i] || value != arr[i]) {
                        newArr.push(arr[i]);
                    }
                }
            } else
                if (typeof value == "boolean" && typeof arr[i] == "boolean") {
                    if (value == arr[i]) {
                        newArr.push(arr[i]);
                    }
                }

    }
    return newArr;
}

function findAll(match, arr) {
    var ret = [];
    for (let v of arr) {
        if (Object.is(match, v)) {
            ret.push(v);
        }
        else if (match == null && v == null) {
            ret.push(v);
        } else if (typeof match == "boolean" && typeof v == "boolean") {
            if (match == v) {
                ret.push(v);
            }
        } else if (typeof match == "string" && match.trim() != "" && typeof v == "number" && !Object.is(v, -0)) {
            if (match == v) {
                ret.push(v)
            }
        } else if (typeof match == "number" && !Object.is(match, -0) && !Object.is(match, NaN) && !Object.is(match, Infinity) && !Object.is(match, -Infinity) && typeof v == "string" && v.trim() != "") {
            if (match == v) {
                ret.push(v);
            }
        }
    }
    return ret;
}


// tests:
var myObj = { a: 2 };

var values = [
    null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
    "", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
        for (let v of arr1) {
            if (!arr2.includes(v)) return false;
        }
        return true;
    }
    return false;
}

console.log(typeof myObj);
