// Variables --> var, let, const

let age = 24;
// console.log(age);
age = 35;

age = 45;

// console.log(age);

const age2 = 21;
// console.log(age2);

// Function --> A resueble set of instructions.
// A block of code designed to perform a specific task.

function sayHello() {
  console.log("Bye");
}

// sayHello();

function greetUser(x) {
  console.log("hello", x);
}

// greetUser("Harsh");

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const r = add(2, 5);

for (let i = 0; i < r; i++) {
  // console.log(`Value of i is ${i}`);
}

let cartoon = function () {
  console.log("Anime");
};

// cartoon();

// Arrow Functions
const isAllowedToVote = (age) => age >= 18;
// console.log(isAllowedToVote(23));

const isUserAllowedToOpenBankAccount = (age, minBalance) =>
  age >= 18 && minBalance >= 5000;

console.log(isUserAllowedToOpenBankAccount(23, 6000));


