// Code Challenge: String Concatenation and Template Literals

// Challenge 1:
// Create a function that takes two strings and concatenates them using the + operator.
// Example: concatenateStrings("Hello", "World") should return "HelloWorld".

function concatenateStrings(str1, str2) {
  // Write your code here
}

// Challenge 2:
// Create a function that takes two strings and concatenates them using template literals.
// Example: concatenateStringsTemplate("Hello", "World") should return "HelloWorld".

function concatenateStringsTemplate(str1, str2) {
  // Write your code here
}

// Challenge 3:
// Create a function that takes a name and an age and uses template literals to return a string in the following format: "My name is [name] and I am [age] years old."
// Example: createSentence("John", 25) should return "My name is John and I am 25 years old."

function createSentence(name, age) {
  // Write your code here
}
// Code Challenge: String Concatenation and Template Literals

// Challenge 4:
// Create a function that takes two strings and concatenates them using the concat() method.
// Example: concatenateStringsMethod("Hello", "World") should return "HelloWorld".

function concatenateStringsMethod(str1, str2) {
  // Write your code here
}

// Challenge 5:
// Create a function that takes three strings and concatenates them using template literals with line breaks.
// Example: concatenateWithLineBreaks("Hello", "World", "How are you?") should return "Hello\nWorld\nHow are you?".

function concatenateWithLineBreaks(str1, str2, str3) {
  // Write your code here
}

// Challenge 6:
// Create a function that takes a name and a favorite color and uses template literals to return a string in the following format: "My name is [name] and my favorite color is [color]."
// Example: createFavoriteColorSentence("Alice", "blue") should return "My name is Alice and my favorite color is blue."

function createFavoriteColorSentence(name, color) {
  // Write your code here
}

// *************************************************** //
// *************************************************** //
// ****** DO NOT CHANGE CODE BELOW THIS LINE ********* //
// *************************************************** //
// *************************************************** //

// Code Challenge: String Concatenation and Template Literals

// Challenge 1:
function testConcatenateStrings() {
  const result = concatenateStrings("Hello", "World");
  console.log(result === "HelloWorld" ? 'Test Passed' : 'Test Failed');
}

// Challenge 2:
function testConcatenateStringsTemplate() {
  const result = concatenateStringsTemplate("Hello", "World");
  console.log(result === "HelloWorld" ? 'Test Passed' : 'Test Failed');
}

// Challenge 3:
function testCreateSentence() {
  const result = createSentence("John", 25);
  console.log(result === "My name is John and I am 25 years old." ? 'Test Passed' : 'Test Failed');
}
// Code Challenge: String Concatenation and Template Literals

// Challenge 4:
function testConcatenateStringsMethod() {
  const result = concatenateStringsMethod("Hello", "World");
  console.log(result === "HelloWorld" ? 'Test Passed' : 'Test Failed');
}

// Challenge 5:
function testConcatenateWithLineBreaks() {
  const result = concatenateWithLineBreaks("Hello", "World", "How are you?");
  console.log(result === "Hello\nWorld\nHow are you?" ? 'Test Passed' : 'Test Failed');
}

// Challenge 6:
function testCreateFavoriteColorSentence() {
  const result = createFavoriteColorSentence("Alice", "blue");
  console.log(result === "My name is Alice and my favorite color is blue." ? 'Test Passed' : 'Test Failed');
}

// Run the tests
testConcatenateStrings();
testConcatenateStringsTemplate();
testCreateSentence();
testConcatenateStringsMethod();
testConcatenateWithLineBreaks();
testCreateFavoriteColorSentence();

