const game = "God Of War"; // String
console.log("Game: ", game, "&", typeof game);

const playingGame = true; // Boolean

let name; // Undefined
let snacks = null; // Null

const bigNumber = 5808n; // BigInt
console.log(typeof bigNumber);

let rune = Symbol("Sword");
console.log("Symbol: ", rune.toString());

const electric = {
  id: 1,
  name: "Pikachu",
  type: "Electric",
};

console.log(electric, typeof electric);

const fire = ["Charmander", "Fire"];

console.log(fire, typeof fire);

function sayHello() {
  return "Pokemon";
}

console.log("Pokemon ", typeof sayHello);

let a = 10;
let b = a;

b = 20;

console.log("a: ", a);
console.log("b: ", b);

const student1 = {
  name: "Harsh Guleria",
  mentors: "Hitesh Sir & Piyush Sir",
  blessings: "Aashirwad",
};

console.log(student1);

const student2 = { ...student1 };

const stud1 = {
  name: "Harsh",
  mentors: {
    instructor1: "Hitesh Sir",
    instructor2: "Piyush Sir",
  },
  blessings: "Aashirwad",
};

const stud2 = structuredClone(stud1);

// const student2 = student1;

// student2.name = "Guleria"

// console.log(student1.name)
