// TODO: define polyfill for `Object.is(..)`
if (!Object.is) {
    Object.is = function ObjectIs(x, y) {
        if(isItNegZero(x) === isItNegZero(y)) {
            return true;
        }else if(isItNegZero(x) !== isItNegZero(y)){
            return false;
        }else if (x === y) {
            return true;
        }else if( x !== y) {
            return false;
        }else if(isItNaN(x) === isItNaN(y)){
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

    function isItNegZero(x) {
        return x === 0 && (1 / x) === -Infinity;
    }

    function isItNaN(x) {
        return x !== x;
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
