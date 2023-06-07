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