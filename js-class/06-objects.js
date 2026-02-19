const pokemon = {
  trainer: "Ash Ketchum",
  pokemon: "Charizard",
  level: 45,
  health: 320,
  damage: 75,
};

pokemon.isPowerful = true;
console.log(pokemon);

delete pokemon.damage;

const character = {
  name: "Doraemon",
  level: 100,
  health: 1000,
  damage: "infinity",
};

console.log("damage" in character);
console.log(character.hasOwnProperty("isPrototypeOf"));
