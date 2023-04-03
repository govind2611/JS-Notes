//  Loops are handy, if you want to run the same code over and over again, each time with a different value.

// 1.For Loop
for (let i = 0; i < 34; i++) {
  console.log(i);
}

// 2. for in loop
//The JavaScript for in statement loops through the properties of an Object

let obj = {
  harry: 34,
  gopu: 20,
  om: 15,
  ram: 55,
};

for (let a in obj) {
  console.log(a); // it will print keys of obj
  console.log(obj[a]); // it will print value of object
}

// 3. for of loop
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

let language = "JavaScript";
let text = "";
for (let x of language) {
  text += x;
}

// 4. while loop
//The while loop loops through a block of code as long as a specified condition is true.

let n = 10;
while (i < n) {
  console.log(n);
  i++;
}

//5. do while loop
/* The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. */
let m = 10;
do {
  console.log(i);
  i++;
} while (i < m);

// 6. for each
/*
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.
*/

let arr = ["govind", 25, true, null, undefined];

arr.forEach(function (currValue) {
  console.log(currValue);
});
arr.forEach(function (currValue, index) {
    console.log(index);
  });
