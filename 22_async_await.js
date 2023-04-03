/*
    "async and await make promises easier to write"
    async makes a function return a Promise
    await makes a function wait for a Promise
*/

/* Async function always return a promise */

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
});
async function data() {
  let data = await order();
  console.log(data);
}
