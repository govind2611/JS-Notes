/*
    When we write a code there maybe a chance of repeatition of code & to seperate our logic from code, we use functions.
*/

let a=5;
let b=10; 
let c=15;

// normal function
function sum(x, y){
    return x+y;
}

console.log(sum(a,b));   
console.log(sum(b,c));   
console.log(sum(a,c));   

// arrow function
const sub =(x, y) => {
    return x-y
}
console.log(sub(a,b));   
console.log(sub(b,c));   
console.log(sub(a,c));  


