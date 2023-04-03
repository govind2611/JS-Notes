// in the previous code we have seen about callback hell to solve this problem promises are used

// promise is a promise of code either it get resolved or get rejected

// syntax of promises:-
// let myPromise = new Promise(function (myResolve, myReject) {});

/* promise hast two properties
    01. state :- initially state of promise is pending. if the promise get resolved
    then its state get fulfilled else it will get rejected

    02. result :- resolved / reject

*/
let store = {
  fruits: ["apple", "banana", "Grapes", "Mango"],
  toppings: ["choco chips", "blueberry", "malai"],
  holders: ["cup", "glass", "bottle"],
  liquid: ["milk", "water", "yogurt"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open == true) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};

order(2000, () => {
  console.log("shop is open");
  console.log("Order is pleaced succesfully");
  console.log(`${store.fruits[1]} is selected for order`);
})
  .then(() => {
    return order(3000, () => {
      console.log(`${store.fruits[1]} IS CUTTING FOR YOU NOW`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${store.toppings[2]} is added in your drink`);
    });
  })
  .then(() => {
    return order(4000, () => {
      console.log(`${store.liquid[1]} is added in your drink`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`Your drink is added into ${store.holders[2]}`);
    });
  })
  .then(() => {
    return order(4000, () => {
      console.log(`Order is completed successfully`);
    });
  })
  .catch((err) => {
    console.log("Error while your order is placing");
  })
  .finally(() => {
    console.log("THANK YOU for visiting");
  });
