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
for (let i = 0; i < 5; i++) {
  // code bloack to be executed
  console.log(i);
}

const credentials = {
  username: "john doe",
  password: "12345678",
};

for (key in credentials) {
  console.log(key);
}

const newName = "peter";
while (newName == "peter") {
  // execute statement
}

for (keys of credentials) {
  console.log(keys);
}

let oldFriends = ["peter", "shina", "daniel", "gbenga", "ayo", "brian"];

oldFriends.forEach((element, index) => {
  console.log(element);
  console.log(index);
});

oldFriends.map((element, index) => {
  console.log(element);
  console.log(index);
});

oldFriends.filter((element, index) => {
  // code block to be executed
});

oldFriends.findIndex((el, id, arrr) => {
  // code block to be executed
});

oldFriends.some((el, id, arr) => {
  // code block to be executed
});

oldFriends.every((el, id) => {
  // code block to be executed
});

oldFriends.reduce((prevValue, currValue, index, array) => {
  // code block
});

oldFriends.reduceRight((prevValue, currValue, index, array) => {
  // code block
});

// value and reference

// arrays
const numbers = [1, 2, 3, 4, 5];
const anotherNumber = numbers;
anotherNumber.push(6);

console.log(numbers === anotherNumber);

// objects
const person = {
  firstName: "habib",
  lastName: "oyero",
};

const anotherPerson = person;
anotherPerson.lastName = "ajadi";

console.log(person === anotherPerson);

// cloning arrays

const original = [1, 2, 3, 4, 5, 6];
const newOg = [...original];

newOg.push(7);
console.log(newOg);
console.log(original);
console.log(original === newOg);

const users = [
  { firstName: "habib", lastName: "oyero" },
  { firstName: "mateen", lastName: "jolaosho" },
];

const newUser = JSON.parse(JSON.stringify(users));

console.log(users === newUser);

// math and date methods

let value = 100;
let value2 = 50.5;
let value3 = 3;
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19];

Math.abs(value);
Math.acos(value);
Math.acosh(value);
Math.asin(value);
Math.asinh(value);
Math.atan(value);
Math.atanh(value);
Math.cbrt(value);
Math.ceil(value2);
Math.exp(value3);
Math.floor(value2);
Math.max(...allNumbers);
Math.min(...allNumbers);

Math.pow(2, 5);
Math.random();
Math.sign(-3);
Math.sinh(5);

Math.trunc(value2);

// date object

let date = new Date();

date.getFullYear();
date.getMonth();
date.getDate();
date.getHours();
date.getMinutes();
date.getTime();
date.getDay();
let newDate = Date.now();

date.getMilliseconds();
date.getSeconds();

date.getUTCFullYear();

// set date methods

let oldDate = new Date();

oldDate.setDate(25);
oldDate.setFullYear(2020);
oldDate.setMonth(7);
oldDate.setTime(1598000000000);

console.log(oldDate);

const testDate = new Date(2014, 4, 22);

const testDateNew = new Date("23 May, 2002");
