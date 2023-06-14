// new keyword is the third way to invoke this function


function askYou(question) {
    console.log(this.teacher, question);
}

var nowEmptyObject = new askYou("What is 'new' doing here?");
console.log('this', nowEmptyObject);
// using new here is kinda similar to function.call({},arg...);

// new: steps

//  1.Create a brand new empty object
//  2. * link that object to another object
//  3. call function with tis set to the new object
//  4. if function does not return an object, assumes return of this keyword