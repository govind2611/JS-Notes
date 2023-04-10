/*
Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining. 
*/

/* 
went to barbour shop to get the hair cut
waiting in que => get the hair cut => pay money => come to home
*/
/* example 1*/
// function wait() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Waiting in que........");
//     }, 2000);
//   });
// }
// function hairCut() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Cutting the hair........");
//     }, 3000);
//   });
// }
// function payment() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Pay money........");
//     }, 4000);
//   });
// }
// function home() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Going to home...");
//     }, 2000);
//   });
// }

// wait()
// .then((data) => {
//     console.log(data);
//     return hairCut()
// }).then((data) => {
//     console.log(data);
//     return payment()
// }).then((data) => {
//     console.log(data);
//     return home()
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("arrived home...");
// })

/*example 2*/

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Welcome to our hotel.. ");
    }, 2000);
  });
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("What would you like to eat sir ?? ");
    }, 2000);
  });
}
function prepareFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Preparing food...");
    }, 2000);
  });
}
function giveFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Giving food to the customer...");
    }, 2000);
  });
}
function takePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Taking payment...");
    }, 2000);
  });
}
function thank() {
  setTimeout(() => {
    console.log("Thank you for your visit sir..");
  }, 2000);
}

greet()
  .then((data) => {
    console.log(data);
    return takeOrder();
  })
  .then((data) => {
    console.log(data);
    return prepareFood();
  })
  .then((data) => {
    console.log(data);
    return giveFood();
  })
  .then((data) => {
    console.log(data);
    return takePayment();
  })
  .then((data) => {
    console.log(data);
    thank();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("have a good day sir");
  });
