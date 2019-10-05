const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tis is my resolved data");
  }, 5000);
});

console.log("before");

promise.then(data => {
  console.log("1 ", data);
});

promise.then(data => {
  console.log("2 ", data);
});

console.log("after");