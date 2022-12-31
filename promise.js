// async function doSomething() {
//   console.log("First promise fulfilled");
// }

// function doSomethingElse(result) {
//   console.log(result);
// }

// function doThirdThing(result) {
//   console.log(`This result was gotten from the first promise ${result}`);
// }

// const failureCallback = async() => {
//     console.log("An error occured")
// }

// doSomething()
//   .then(function (result="First Result") {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult="Second result");
//   })
//   .then(function (finalResult="Third result") {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);

// new Promise((resolve, reject) => {
//   console.log("Initial");

//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");

//     console.log("Do this");
//   })
//   .catch(() => {
//     console.error("An error occured");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//   })

// const wait = (ms) => new Promise((resolve) => {
//     console.log(0)
//     return setTimeout(resolve, ms) //SetTimeout callbacks gets added to the task queue
// });

// wait(0).then(() => console.log(4));
// Promise.resolve()
//   .then(() => console.log(2))//promise callback is treated as microtask
//   .then(() => console.log(3));
// console.log(1); // 1, 2, 3, 4


// const promise = new Promise((resolve, reject) => {
//   console.log("Promise callback");
//   console.log("I'm resolving");
//   resolve();
// }).then((result) => {
//     console.log("Finished resolving");
//   console.log("Promise callback (.then)");
// });

// setTimeout(() => {
//   console.log("event-loop cycle: Promise (fulfilled)", promise);
// }, 1);

// console.log("Promise (pending)", promise);

// const promise = new Promise((resolveOuter) => {
//     console.log("One")
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(resolveInner, 10000);
//             console.log("Two");
//         })
//     );
// });

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 1000);
});

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value)
  })
  .catch((err) => {
    console.error(err);
  });


