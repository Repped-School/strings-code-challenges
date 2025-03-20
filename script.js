// Code Challenge: Identify and Manipulate Arrays

// Challenge 1:
// Create a function that takes an array of numbers and returns the sum of all the numbers in the array.
// Example: calculateSum([1, 2, 3, 4, 5]) should return 15.

function calculateSum(numbers) {
  // Write your code here
}

// Challenge 2:
// Create a function that takes an array of strings and returns the concatenation of all the strings in the array, separated by a space.
// Example: concatenateStrings(["Hello", "World", "JavaScript"]) should return "Hello World JavaScript".

function concatenateStrings(strings) {
  // Write your code here
}

// Challenge 3:
// Create a function that takes an array of numbers and returns a new array with only the even numbers from the original array.
// Example: filterEvenNumbers([1, 2, 3, 4, 5, 6]) should return [2, 4, 6].

function filterEvenNumbers(numbers) {
  // Write your code here
}

// Challenge 4:
// Create a function that takes an array of strings and returns a new array with the lengths of the strings from the original array.
// Example: getStringLengths(["Hello", "World", "JavaScript"]) should return [5, 5, 10].

function getStringLengths(strings) {
  // Write your code here
}

// Code Challenge: Identify and Manipulate Arrays

// Challenge 5:
// Create a function that takes an array of numbers and returns the largest number in the array.
// Example: findLargestNumber([10, 5, 7, 3, 9]) should return 10.

function findLargestNumber(numbers) {
  // Write your code here
}

// Challenge 6:
// Create a function that takes an array of strings and returns a new array with the strings in uppercase.
// Example: convertToUppercase(["hello", "world", "javascript"]) should return ["HELLO", "WORLD", "JAVASCRIPT"].

function convertToUppercase(strings) {
  // Write your code here
}

// Challenge 7:
// Create a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// Example: sortNumbers([5, 2, 9, 1, 3]) should return [1, 2, 3, 5, 9].

function sortNumbers(numbers) {
  // Write your code here
}

// Challenge 8:
// Create a function that takes an array of strings and returns the total number of characters in all the strings combined.
// Example: countTotalCharacters(["Hello", "World", "JavaScript"]) should return 21.

function countTotalCharacters(strings) {
  // Write your code here
}

// *************************************************** //
// *************************************************** //
// ****** DO NOT CHANGE CODE BELOW THIS LINE ********* //
// *************************************************** //
// *************************************************** //

// Code Challenge: Identify and Manipulate Arrays

// Challenge 1:
function testCalculateSum() {
  const result = calculateSum([1, 2, 3, 4, 5]);
  console.log(result === 15 ? 'Test Passed' : 'Test Failed');
}

// Challenge 2:
function testConcatenateStrings() {
  const result = concatenateStrings(["Hello", "World", "JavaScript"]);
  console.log(result === "Hello World JavaScript" ? 'Test Passed' : 'Test Failed');
}

// Challenge 3:
function testFilterEvenNumbers() {
  const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
  console.log(JSON.stringify(result) === JSON.stringify([2, 4, 6]) ? 'Test Passed' : 'Test Failed');
}

// Challenge 4:
function testGetStringLengths() {
  const result = getStringLengths(["Hello", "World", "JavaScript"]);
  console.log(JSON.stringify(result) === JSON.stringify([5, 5, 10]) ? 'Test Passed' : 'Test Failed');
}

// Code Challenge: Identify and Manipulate Arrays

// Challenge 5:
function testFindLargestNumber() {
  const result = findLargestNumber([10, 5, 7, 3, 9]);
  console.log(result === 10 ? 'Test Passed' : 'Test Failed');
}

// Challenge 6:
function testConvertToUppercase() {
  const result = convertToUppercase(["hello", "world", "javascript"]);
  console.log(JSON.stringify(result) === JSON.stringify(["HELLO", "WORLD", "JAVASCRIPT"]) ? 'Test Passed' : 'Test Failed');
}

// Challenge 7:
function testSortNumbers() {
  const result = sortNumbers([5, 2, 9, 1, 3]);
  console.log(JSON.stringify(result) === JSON.stringify([1, 2, 3, 5, 9]) ? 'Test Passed' : 'Test Failed');
}

// Challenge 8:
function testCountTotalCharacters() {
  const result = countTotalCharacters(["Hello", "World", "JavaScript"]);
  console.log(result === 21 ? 'Test Passed' : 'Test Failed');
}

// Run the tests
testCalculateSum();
testConcatenateStrings();
testFilterEvenNumbers();
testGetStringLengths();
testFindLargestNumber();
testConvertToUppercase();
testSortNumbers();
testCountTotalCharacters();
