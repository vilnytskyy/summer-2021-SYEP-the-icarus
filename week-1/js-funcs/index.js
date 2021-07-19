/**
 * FOR EACH
 * 
 * This function loops through an array from beginning to end.
 * @param loopBody  should be a function that takes three parameters: element, index, array.
 * @param array     should be an array if this is not run as a method.
 */
Array.prototype.myForEach = (loopBody, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) continue;

        loopBody(array[i], i, array);
    }
};

// FOR EACH TESTS //
console.log("==== Testing forEach ====");

// Test 1: Initial Test //
console.log("== Test 1: Even ==");
//this should be const
const testForEach = ["Repl", "is", "extra"];

//make this an arrow function
testForEach.myForEach((element, index) => {
    console.log(index + ": " + element);
}, testForEach);
//Expected output
//0: Repl
//1: is
//2: extra

// Test 2: Even //
console.log("== Test 2: Even ==");

const arr1 = [1, 2, , 3];

const isEven = number => console.log(number % 2 === 0);

console.log("forEach: ");
arr1.forEach(isEven);

console.log("myForEach: ");
arr1.myForEach(isEven, arr1);

// Test 3: Print Elements //
console.log("== Test 3: Print Elements ==");

// func found on the MDN Web Docs page for forEach
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

console.log("forEach: ");
arr1.forEach(logArrayElements);

console.log("myForEach: ");
arr1.myForEach(logArrayElements, arr1);


/**
 * MAP
 * 
 * This function creates a new array by looping through each element of a given array and applying a mapping function to it.
 * @param mapping  the function that returns a new element to be put into the mapped array. It is given three parameters: element, index, array
 * @param array    an array to apply this mapping to, not modified.
 * @return         a brand new array with equal length to the original.
 */
function myMap(mapping, array) {
    //if this is run as an instance method, bind array to this
    if (array == undefined || array == null) {
        array = this;
    }
    let newArray = [];
    // code here
    return newArray;
}

//this allows us to call it as an instance method of all Arrays using "."
Array.prototype.map = myMap;

console.log("==== Testing Map ====");

let testMap = [1, 2, 3, 4, 5];
console.log(myMap(function (element) {
    return element * element;
}, testMap));
//should be [1, 4, 9, 16, 25]


/**
 * FILTER
 * 
 * This function returns a new array based on the original. However, the decision whether to include any given element is made by a filtering function. This should be a boolean function. It will be called on each element.
 * @param filterFunction  a function that returns true if an element should be included in the filter and false if it shouldn't. It will be given three parameters: element, index, array.
 * @param array           the array to be scanned
 * @return                the new array
 */
function myFilter(filterFunction, array) {
    if (array == undefined) {
        array = this;
    }
    //code here
}

Array.prototype.filter = myFilter;

console.log("==== Testing Filter ====");
let testFilter = [1, 2, 3, 4, 5];
let filtered = testFilter.filter(function (element) {
    return (element % 2) == 0; //even?
});
console.log(filtered);
// should be [2, 4]
console.log(filtered == testFilter);
// should be false since a new array is created, not modified

/**
 * SOME
 * 
 * Returns true if any (not necessarily all) of the elements of this array pass a test. Returns false otherwise. The testing function is run on each element until a true value is returned, then it stops.
 * @param loopBody  a function that returns true/false and takes (element, index, array) as parameters.
 * @param array     the array that should be looped over
 * @return          true or false.
 */
function mySome(loopBody, array) { }
console.log("==== Testing Some ====");

/**
 * EVERY
 * 
 * Runs a test on each element in the array. If the test returns true for each element, then this function returns true. Otherwise, this function will return false if any of the elements do not pass the test.
 * @param loopBody  a function that returns true/false and takes these parameters: element, index and array.
 * @param array     the array to be looped over
 * @return          true or false
 */
function myEvery(loopBody, array) { }

Array.prototype.every = myEvery;
console.log("==== Testing every ====");

/**
 * REDUCE
 * 
 * Performs a reduction operation on an array. You provide a callback function, and optionally an intial value for the accumulator. The reduction will go from index 0 to the end of the array. The callback must return the new value of the accumulator.
 * @param loopBody  a function that takes these parameters: accumulator, current element, current index, and array. It must return something.
 * @param initialValue  the initial value for the accumulator before the first element is reduce. By default, this is 0.
 * @param array  the array to reduce
 * @return       the final accumulator value
 */
function myReduce(loopBody, initialValue, array) { }

Array.prototype.reduce = myReduce;

console.log("==== Testing Reduce ====");
let testReduce = [-3, 3, 9];
console.log("Sum: " + myReduce(function (sum, x) {
    return sum + x;
}, 100, testReduce));
//should print Sum: 109
console.log("Min: " + myReduce(function (min, x) {
    return (min < x) ? min : x;
}, 0, testReduce));
//should print Min: -3

/**
 * INCLUDES
 * 
 * Returns true if "value" is in this array.
 * @param value  literally anything you wanna find
 * @param array  where you want to look (array)
 * @return       true or false
 */
function myIncludes(value, array) {
    array = array || this;
    //code here
}

Array.prototype.includes = myIncludes;

console.log("==== Testing Include ====");

let testIncludes = [6, 7, 8];
console.log("Includes 6: " + myIncludes(6, testIncludes));
console.log("Includes 10: " + testIncludes.includes(10));

/**
 * INDEXOF
 * 
 * Returns the index where this element is found in the array. This will be the least (first) index.
 * @param needle  the thing to find
 * @param beginFrom  the place to start looking (default 0)
 * @param haystack   the array to look in
 */
function myIndexOf(needle, haystack, beginFrom) {
    beginFrom = beginFrom || 0; //default value
    haystack = haystack || this;
    //code here
}

Array.prototype.indexOf = myIndexOf;
console.log("==== Testing indexOf ====");

/**
 * PUSH
 * 
 * Appends an element to the array. Returns the bigger length of the array.
 * @param elementToAdd  anything
 * @param array         the array to modify
 * @return              old_length+1
 */
function myPush(elementToAdd, array) { }

console.log("==== Testing Push ====");

Array.prototype.push = myPush;
let testPush = ["why do we use"];
console.log(myPush("repl", testPush));

/**
 * LASTINDEXOF
 * 
 * Finds the last occurence of an element.
 */
function myLastIndexOf(needle, haystack, beginFrom) {
    haystack = haystack || this;
}

Array.prototype.lastIndexOf = myLastIndexOf;

console.log("==== Testing lastIndexOf ====");

let testLast = ["P", "Q", "Q", "P", "P"];
console.log("Last P: " + myLastIndexOf("P", testLast));
console.log("Last Q: " + testLast.lastIndexOf("Q"));

/**
 * KEYS
 * 
 * Gets an array of object properties
 */
function grabKeys(obj) {
    //hint: lookup for-in loops
}

/**
 * VALUES
 * 
 * Gets an array of the values of all properties on an object
 */
function grabValues(obj) {

}

let testKeys = { points: 500, username: "Max", wow: null };
console.log("==== Testing grabKeys ====");
console.log(grabKeys(testKeys));
//points, username, wow
console.log("==== Testing grabValues ====");
console.log(grabValues(testKeys));
//500, "Max", null