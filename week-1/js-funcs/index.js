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

// Test 1: Print Elements //
console.log("=== Test 1: Print Elements ===");
//this should be const
const testForEach = ["Repl", "is", "extra"];

// func found on the MDN Web Docs page for forEach
function logArrayElements(element, index) {
  console.log('a[' , index , '] =', element);
}

console.log("= forEach =");
testForEach.forEach(logArrayElements);

console.log("= myForEach =");
testForEach.myForEach(logArrayElements, testForEach);

//make this an arrow function
// testForEach.myForEach((element, index) => {
//     console.log(index + ": " + element);
// }, testForEach);
//Expected output
//0: Repl
//1: is
//2: extra

// Test 2: Even //
console.log("=== Test 2: Even ===");

const arr1 = [1, 2, , 3];

const printIsEven = number => console.log("Is", number, "even?", number % 2 === 0);

console.log("= forEach =");
arr1.forEach(printIsEven);

console.log("= myForEach =");
arr1.myForEach(printIsEven, arr1);



/**
 * MAP
 * 
 * This function creates a new array by looping through each element of a given array and applying a mapping function to it.
 * @param mapping  the function that returns a new element to be put into the mapped array. It is given three parameters: element, index, array
 * @param array    an array to apply this mapping to, not modified.
 * @return         a brand new array with equal length to the original.
 */
Array.prototype.myMap = (mapping, array) => {
  //if this is run as an instance method, bind array to this
  if (array == undefined || array == null) {
    array = this;
  }

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) continue;

    newArray[i] = mapping(array[i], i, array);
  }

  return newArray;
};


// MAP TESTS //
console.log("==== Testing Map ====");

// Test 1: Squared //
console.log("=== Test 1: Squared ===");

const testMap = [1, 2, 3, 4, 5];
const square = (element) => {
  return element * element;
}

console.log("= map =");
console.log(testMap.map(square));

console.log("= myMap =");
console.log(testMap.myMap(square, testMap));
//should be [1, 4, 9, 16, 25]

// Test 2: X2
console.log("=== Test 2: X2 ===");

const arr3 = [1, 4, 9, , 16];
const times2 = x => x * 2;

console.log("= map =");
console.log(arr3.map(times2));

console.log("= myMap =");
console.log(arr3.myMap(times2, arr3));

// Test 3: Reformat Array
console.log("=== Test 3: Reformat Array ===");

const kvArray = [{ key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 }];

// func found on the MDN Web Docs page for map
const reformatArray = (obj => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
})

console.log("= map =");
console.log(kvArray.map(reformatArray));

console.log("= myMap =");
console.log(kvArray.myMap(reformatArray, kvArray));



/**
 * FILTER
 * 
 * This function returns a new array based on the original. However, the decision whether to include any given element is made by a filtering function. This should be a boolean function. It will be called on each element.
 * @param filterFunction  a function that returns true if an element should be included in the filter and false if it shouldn't. It will be given three parameters: element, index, array.
 * @param array           the array to be scanned
 * @return                the new array
 */
Array.prototype.myFilter = (filterFunction, array) => {
  if (array == undefined) {
    array = this;
  }

  let arr = [];
  let arr_i = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) continue;

    if (filterFunction(array[i], i, array)) {
      arr[arr_i] = array[i];
      arr_i++;
    }
  }

  return arr;
};

// FILTER TESTS //
console.log("==== Testing Filter ====");

// Test 1: Even //
console.log("=== Test 1: Even ===");

let testFilter = [1, 2, 3, 4, 5];
const isEven = number => number % 2 === 0;

console.log("= filter =");
console.log(testFilter.filter(isEven));
// should be [2, 4]

console.log("= myFilter =");
console.log(testFilter.myFilter(isEven, testFilter));

// Test 2: Limit
console.log("=== Test 2: Limit ===");

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const limit = word => word.length > 6;

console.log("= filter =");
console.log(words.filter(limit));

console.log("= myFilter =");
console.log(words.myFilter(limit, words));

// Test 3: Prime
console.log("=== Test 3: Prime ===");

const arr4 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// func found on the MDN Web Docs page for filter
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("= filter =");
console.log(arr4.filter(isPrime));

console.log("= myFilter =");
console.log(arr4.myFilter(isPrime, arr4));



/**
 * SOME
 * 
 * Returns true if any (not necessarily all) of the elements of this array pass a test. Returns false otherwise. The testing function is run on each element until a true value is returned, then it stops.
 * @param loopBody  a function that returns true/false and takes (element, index, array) as parameters.
 * @param array     the array that should be looped over
 * @return          true or false.
 */
Array.prototype.mySome = (loopBody, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) continue;

    if (loopBody(array[i], i, array)) {
      return true;
    }
  }

  return false;
};


// SOME TESTS //
console.log("==== Testing Some ====");

// Test 1: Even - True
console.log("=== Test 1: Even - True ===");

const arr5 = [1, 2, 3, 4, 5];

console.log("Are some elements in", arr5, "even?");

console.log("= some =");
console.log(arr5.some(isEven));

console.log("= mySome =");
console.log(arr5.mySome(isEven, arr5));

// Test 2: Even - False
console.log("=== Test 2: Even - False ===");

const arr5b = [1, 5, 7, 3, 9];

console.log("Are some elements in", arr5b, "even?");

console.log("= some =");
console.log(arr5b.some(isEven));

console.log("= mySome =");
console.log(arr5b.mySome(isEven, arr5b));



/**
 * EVERY
 * 
 * Runs a test on each element in the array. If the test returns true for each element, then this function returns true. Otherwise, this function will return false if any of the elements do not pass the test.
 * @param loopBody  a function that returns true/false and takes these parameters: element, index and array.
 * @param array     the array to be looped over
 * @return          true or false
 */
Array.prototype.myEvery = (loopBody, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) continue;

    if (!loopBody(array[i], i, array)) {
      return false;
    }
  }

  return true;
};


// EVERY TESTS //
console.log("==== Testing Every ====");

// Test 1: Threshold - True
console.log("=== Test 1: Threshold - True ===");

const arr6 = [1, 30, 39, 29, 13, 6];

const isBelowThreshold = (currentValue) => currentValue < 40;

console.log("Is every element in", arr6, "below the threshold (< 40)?");

console.log("= every =");
console.log(arr6.every(isBelowThreshold));

console.log("= myEvery =");
console.log(arr6.myEvery(isBelowThreshold, arr6));

// Test 2: Threshold - False
console.log("=== Test 2: Threshold - False ===");

const arr6b = [7, 25, 47, 38, 2, 18];

console.log("Is every element in", arr6b, "below the threshold (< 40)?");

console.log("= every =");
console.log(arr6b.every(isBelowThreshold));

console.log("= myEvery =");
console.log(arr6b.myEvery(isBelowThreshold, arr6b));



/**
 * REDUCE
 * 
 * Performs a reduction operation on an array. You provide a callback function, and optionally an intial value for the accumulator. The reduction will go from index 0 to the end of the array. The callback must return the new value of the accumulator.
 * @param loopBody  a function that takes these parameters: accumulator, current element, current index, and array. It must return something.
 * @param initialValue  the initial value for the accumulator before the first element is reduce. By default, this is 0.
 * @param array  the array to reduce
 * @return       the final accumulator value
 */
Array.prototype.myReduce = (loopBody, initialValue, array) => {
  let startIndex = 0;
  let total = 0;
  let totalElements = 0;
  let elementIndices = [];
  let indexM = 0;

  // Sets arrEmpty to true if either this array is not an array or this array is empty
  let arrEmpty = !Array.isArray(array) || !array.length;
  // Sets inVal to true if initialValue is undefined  
  let inVal = initialValue === undefined;

  // Checking if the array is empty and no initial value is provided
  if (arrEmpty && inVal) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  // Counts !undefined values in array
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      totalElements++;
      elementIndices[indexM] = i;
      indexM++;
    }
  }

  // Checking if initialValue is provided
  if (inVal) {
    if (totalElements > 1) {
      startIndex += elementIndices[1];
    }

    total += array[elementIndices[0]];
  } else {
    total += initialValue;
  }

  // If the array only has one element (regardless of position) and no initialValue is provided,
  // return the solo value without calling loopBody
  if (totalElements === 1 && inVal) {
    return array[elementIndices[0]];
  }

  // if initialValue is provided but the array is empty, return the solo value without calling loopBody
  if (arrEmpty && !inVal) {
    return initialValue;
  }


  for (let i = startIndex; i < array.length; i++) {
    if (array[i] === undefined) continue;
    total = loopBody(total, array[i], i, array);
  }

  return total;
};


// REDUCE TESTS //
console.log("==== Testing Reduce ====");

// Test 1: Sum + Min
console.log("=== Test 1: Sum + Min ===");

const sum = (sum, x) => sum + x;
const min = (min, x) => (min < x) ? min : x;

let testReduce = [-3, 3, 9];

console.log("= reduce =");
console.log("Sum: " + testReduce.reduce(sum, 100));
//should print Sum: 109
console.log("Min: " + testReduce.reduce(min));
//should print Min: -3

console.log("= myReduce =");

console.log("Sum: " + testReduce.myReduce(sum, 100, testReduce));
//should print Sum: 109
console.log("Min: " + testReduce.myReduce(min, undefined, testReduce));
//should print Min: -3

// Test 2: Reducer
console.log("=== Test 2: Reducer ===");

const arr7 = [1, 2, 3, 4];

console.log("= reduce =");
console.log(arr7.reduce(sum));

console.log("= myReduce =");
console.log(arr7.myReduce(sum, undefined, arr7));

// Test 3: InitialVal
console.log("=== Test 3: InitialVal ===")

console.log("= reduce =");
console.log(arr7.reduce(sum, 5));

console.log("= myReduce =");
console.log(arr7.myReduce(sum, 5, arr7));

// Test 4: Error
console.log("=== Test 4: Error ===");

const arr7b = [];

console.log("= reduce =");
try {
    arr7b.reduce(sum);
} catch (error) {
    console.log("Caught Error!");
}

console.log("= myReduce =");
try {
    arr7b.myReduce(sum, undefined, arr7b);
} catch (error) {
    console.log("Caught Error!");
}

// Test 5: Empty Arr w/ IntialVal
console.log("=== Test 5: Empty Arr w/ IntialVal ===");

console.log("= reduce =");
console.log(arr7b.reduce(sum, 5));

console.log("= myReduce =");
console.log(arr7b.myReduce(sum, 5, arr7b));



/**
 * INCLUDES
 * 
 * Returns true if "value" is in this array.
 * @param value       literally anything you wanna find
 * @param fromIndex  the place to start looking (default 0)
 * @param array       where you want to look (array)
 * @return            true or false
 */
Array.prototype.myIncludes = (value, fromIndex, array) => {
  array = array || this;

  let startIndex = 0;

  // Check if fromIndex is provided
  if (fromIndex !== undefined) {
    if (fromIndex >= array.length) {
      return false;
    }

    if (fromIndex < 0) {
      startIndex = array.length + fromIndex;

      if (startIndex <= -1 * array.length) {
        startIndex = 0;
      }
    } else {
      startIndex += fromIndex;
    }
  }

  for (let i = startIndex; i < array.length; i++) {
    if (array[i] === value || Number.isNaN(array[i])) {
      return true;
    }
  }

  return false;
};

console.log("==== Testing Include ====");

let testIncludes = [6, 7, 8];
console.log("Includes 6: " + testIncludes.myIncludes(6, undefined, testIncludes));
console.log("Includes 10: " + testIncludes.includes(6));



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