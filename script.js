// variables

const username = "habib";
let book = "shakespare";
var cream = "papaya";

function verifyUser() {
  // const username = "adam"
  let username = "hello username";
  console.log(book);
  console.log(cream);

  if (true) {
    let username = "gufro";
    console.log(username);
  }

  console.log(username);
}

verifyUser();

console.log(username);

var x = "foo";
// var y = "bar"

console.log(x);
console.log(y);

var y = "bar";

function foo() {
  var fruit = "banana";
  console.log(fruit);
}

foo();

// this is a block scope, let and const are scoped to the if condition, while var can be accessed outside
function bar() {
  if (true) {
    var a = "fadh";
    let b = "benson";
    const c = "zangar";
    console.log(a);
  }
  console.log(a);
  // console.log(b); error - b is not defined
  // console.log(c);
}

bar();

// lexical context
function foo1() {
  var fruit1 = "strawberry";
  let fruit2 = "orange";
  const fruit3 = "lemon";

  function foo2() {
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
  }
  foo2();
}

foo1();

// functions
function nameUser() {
  // statment
}

let sickness = function patientSickness() {
  // statement
};

const createPassword = () => {
  // statement
};

// conditional statements

let condition1 = "habib";
if (condition1) {
  // statement
} else {
  // another statement
}

let condition2 = "nasir";
let condition3 = "adam";

if (condition2) {
  // statment
} else if (condition3) {
  // statement
} else {
  // statement
}

let ewedu = "yoruba soup";
let z = "z";
switch (ewedu) {
  case x:
    // statement
    break;
  case y:
    // statement
    break;
  case z:
    // statement
    break;
  default:
  // code block
}

// ternery operator

let condition = "condition";
let ExpressionIfTrue = "ExpressionIfTrue";
let ExpressionIffalse = "ExpressionIffalse";
condition ? ExpressionIfTrue : ExpressionIfFalse;

// string methods

var testString = "nasrullah ajibola";

testString[14];
testString.length;
testString.split(" ");
testString.split("");
testString.toLowerCase();
testString.toUpperCase();
testString.charAt(14);
testString.replace("aji", "ola");
testString.includes("ajibo");
testString.substr(0, 10);
testString.includes(testString);
testString.indexOf("o");
testString.lastIndexOf("a");
testString.slice(4, 8);

// array method
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = ["baby", "girl", "boy", "child", "children"];

testArray[5];
// push adds value to the end of the array and return the new count
testArray.push(15, 12, 82);
// pop removes last array and return the removed element
testArray.pop();
// shift removes the first array and returns the item that was removed
testArray.shift();
// unshift adds an item to the first index and returns the new count
testArray.unshift("hello");
// splice removes the no of elements starting from the startIndex of the array
testArray.splice(3, 4);
// slice copies a certain part of the array
testArray.slice(2, 5);
// concat joins two array together
testArray.concat(newArray);
testArray.join(" ");
testArray.length;
testArray.reverse();
testArray.toString();
testArray.includes("hello");
testArray.sort();
testArray.indexOf(9);
testArray.lastIndexOf(2);

// resultant test Array
testArray;

// looping
