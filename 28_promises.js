/*
JavaScript Promises are a modern approach to handle asynchronous operations. Although we can handle small small asynchronous operations using Callback Functions, but not large operations. Promises can handle long and nested asynchronous operations easily.

 Promises are also helpful to handle long chaining of nested callback functions known as callback hell in javascript.

Promise States
 A Promise is always in one of these states, pending, fulfilled and rejected. For chaining in Promise, we can use then or catch method.

 */


 // syntax
 /*
 let promise = new Promise((resolve, reject) => {
        resolve("hiii");
 });
 console.log(promise);
 */

 
/* to check the states of promise
console.log("code start at : ", new Date());
const myPromise= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hiiii");
    }, 2000);
})
console.log(myPromise, new Date());
setTimeout(() => {
    console.log(myPromise, new Date());
}, 3000);
*/

/* use of then and catch in promises*/

// console.log("use of then");
// let num = 5;
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(num >= 10){
//             resolve("Number is bigger than 10")
//         }
//         else{
//             reject("Number is less than 10")
//         }
//     }, 2000);
// })

// promise.then((data) =>{
//     console.log("data", data);
// }).catch((err) => {
//     console.log("data", err);
// })

/* FINALLY KEYWORD JUST RETURN THE BODY AFTER THE WHOLE EXECUTION OF THE CODE, IT IS NOT DEPENDANT ON RESOLVE AND REJECT*/



/* practise */
let string = "govind";
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(string.length === 6){
            console.log(myPromise);
            resolve("String has the length 6");
            
        }
        else{
            console.log(myPromise);
            reject("string is not accurate")
        }
    }, 2000);

});
console.log(myPromise);
myPromise.then((data) => {
    console.log(myPromise);
    console.log(data);
})
.catch((err) => {
    console.log(myPromise);
    console.log(err);
}).finally(() => {
    console.log("THANK YOU");
})