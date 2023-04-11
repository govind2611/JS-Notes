console.log("async-awiat");

/* js is a synchronus language so it runs the code line by line */

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);
// console.log(3);
/* it will print 1 3 2 in 1000ms because js runs async code parallel */

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);
// setTimeout(() => {
//     console.log(3);
// }, 2000);
// setTimeout(() => {
//     console.log(4);
// }, 3000);
// console.log(5);
/* it will print 1 5 immediately  2 3 4 in 3000  ms it wont take 6000 sec*/

/*promise*/

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hiii i am govind");
//         }, 1000);
// })

/* async await*/
// function myFunc(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hiii i am govind");
//             }, 1000);
//     })
// }
// function myNmae(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("govind");
//             }, 1000);
//     })
// }
// async function myAsyncFunc(){
//     console.log("my function");
//     const myPr = await myFunc();
//     const name = await myNmae();
//     console.log(myPr);
//     console.log(name);
// }
// myAsyncFunc();

// example 2
// function greet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Welcome to our hotel.. ");
//     }, 2000);
//   });
// }

// function takeOrder() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("What would you like to eat sir ?? ");
//     }, 2000);
//   });
// }
// function prepareFood() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Preparing food...");
//     }, 2000);
//   });
// }
// function giveFood() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Giving food to the customer...");
//     }, 2000);
//   });
// }
// function takePayment() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Taking payment... failed");
//     }, 2000);
//   });
// }
// function thank() {
//   setTimeout(() => {
//     console.log("Thank you for your visit sir..");
//   }, 2000);
// }

// // handling the chain by async await
// async function handleChain() {
//   console.log("Welcome");
//   try {
//     const first = await greet();
//     console.log(first);
//     const sec = await takeOrder();
//     console.log(sec);
//     const third = await prepareFood();
//     console.log(third);
//     const fourth = await giveFood();
//     console.log(fourth);
//     const fifth = await takePayment();
//     console.log(fifth);
//     const six = await thank();
//     console.log(six);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handleChain();

/* example 3 */

function addition(a, b) {
  return new Promise((resolve, reject) => {
    console.log(`Addition is starting of ${a} and ${b} :`);
    setTimeout(() => {
      let c = a + b;
      console.log(`The addition is : ${c}`);
      resolve(c);
    }, 1000);
  });
}
function substraction(c) {
  return new Promise((resolve, reject) => {
    console.log(`Substraction is starting of ${c} - 10 :`);
    setTimeout(() => {
      let d = c - 10;
      console.log(`The substraction is : ${d}`);
      resolve(d);
    }, 1000);
  });
}
function multi(d) {
  return new Promise((resolve, reject) => {
    console.log(`Multi is starting of ${d} * 10 :`);
    setTimeout(() => {
      let e = d * 10;
      console.log(`The multi is : ${e}`);
      resolve(e);
    }, 1000);
  });
}
function div(e) {
  return new Promise((resolve, reject) => {
    console.log(`Div is starting of ${e} / 10 :`);
    setTimeout(() => {
      let f = e / 10;
      console.log(`The div is : ${f}`);
      resolve(f);
    }, 1000);
  });
}
function result(f) {
  setTimeout(() => {
    console.log(`The final result is : ${f}`);
  }, 3000);
}

async function handle() {
  try {
    let a = await addition(10, 20);
    let b = await substraction(a);
    let c = await multi(b);
    let d = await div(c);
    result(d);
  } catch (err) {
    console.log(err);
  }
}
handle();
