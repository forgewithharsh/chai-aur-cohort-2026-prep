// Objects --> Properties --> key: value

// Two ways
let gemini = new Object(); // Object Constructor Syntax
let claude = {}; // Object Literal

let gpt = {
  company: "openai", //name : value
  version: 5.3,
  releaseYear: 2025,
};

console.log(gpt.company);

// add new property
gpt.type = "Large Language Model";

// property can be any type
gpt.isMultiModal = true;

// Modify
gpt.type = "LLM";

// remove
delete gpt.type;

console.log(gpt);

let sonnet = {
  company: "anthropic",
  version: 4.6,
  "released on": 2026, // multiword property must be quoted
};

// Trailing Comma

console.log(sonnet["released on"]); // Square bracket Notation

// expression value as prop names
const input = "company";
console.log(sonnet[input]);

// Property Shorthand
function getLaptop(name, price) {
  console.log("yu hu");
  return {
    brand: "Apple",
    name,
    price,
  };
}

let myMac = getLaptop("M4 Air", 99_900);
console.log(myMac);

// Search a property
// console.log(myMac.ram === undefined);
console.log("ram" in myMac);

// Looping Object for..in

for (let key in myMac) {
  console.log(myMac[key]);
}

// Const can't be modified then how we modify object
const ev = {
  name: "Mahindra be6",
};

ev.name = "BYD Seal";
console.log(ev);

// Clone [kyu = they copy a reference]

const orginal = {
  k1: "v1",
  k2: "v2",
};

// let clone = {};
// for (let key in orginal) {
//   clone[key] = orginal[key];
// }

// console.log(clone);

let clone = Object.assign({}, orginal);
console.log(clone);

// nestedObj
const pokemon = {
  name: "Pikachu",
  stats: {
    hp: 35,
    attack: 55,
  },
  ability: {
    name: "Static",
    hidden: false,
  },
  evolution: {
    to: {
      name: "Raichu",
      item: "Thunder Stone",
    },
  },
};

// Deep Cloning
const nestedClone = structuredClone(pokemon);
console.log(nestedClone);

