console.clear();
var hello = 42;
var hello1 = [42];

if(hello == hello1){
    console.log('yes')
}

if( 42 == '42')
{
    console.log('yes');
}
// == it prefers numerification, cuz, it has two options, call toString() and compare strings or calling ToNumber() and compare numbers, but it prefers numbers, string becomes number
// we should avoid corner cases, we should all the compare the same types, atb this time we use triple equals



if( 42 === 42)
{
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

if(arr == !arr1){
    console.log('yep');
}

if(arr != arr1){
    console.log('yep');
}


//


if(arr == !arr1){}
if([] == false){

}
if("" == false){}
if(0 = false){}
if(0===0){}
if(true){
    // true what????
}

if(arr != arr1){}
if(!(arr == arr1)){}
if(!(false)){}
if(true){
    // yep whjat???????
}

//

if(arr){
    // logs true
}

if(arr == true){
    // nope :(
}

if(arr == false){
    // yep :(
}

// if(arr){}
// if(Boolean(arr)){
if(true){
    // yep
}

// if(arr == true){}
// if("" == true){}
// if( 0 === 1){}
if(false){
    // Nope:()
}

/*
if(arr == false){}
if("" == false){}
if(0 === 0){}

*/
if(true) {
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