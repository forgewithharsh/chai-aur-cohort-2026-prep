const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Chaicode");
    reject(new Error("Chaicode"));
  }, 2000);
});

console.log(promise);

// promise.then((value) => {
//   console.log(value);
// });

// promise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const makeChai = new Promise((resolve, reject) => {
  let waterBoiled = true;

  if (waterBoiled) {
    resolve("Chai is ready ☕");
  } else {
    reject("Water not boiled ❌");
  }
});

makeChai
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
