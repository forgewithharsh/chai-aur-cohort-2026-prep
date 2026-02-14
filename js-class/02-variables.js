var fName = "Harsh";
// console.log("My name is: ", fName);

let firstName = "Harry";
// console.log("My first name is: ", firstName);
firstName = "Harsh";
// console.log("My first name is: ", firstName);

const lastName = "Guleria";
// console.log("My last name is: ", lastName);

// Problem of Var --> This is not blocked scope.

let data = {
  id: 3,
  item: "Headphones",
  location: "Bangalore",
};

data.item = "Mac";
// console.log(data.item)
data = { location: "Delhi" };

const chai = ["lemon", "ginger", "masala"]
chai.push("rose")
chai[0] = "orange"
