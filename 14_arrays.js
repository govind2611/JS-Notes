//An array can hold many values under a single name, and you can access the values by referring to an index number.

//Syntax

// let arr=["govind", 25, null, undefined, true];
// const cars = new Array("Saab", "Volvo", "BMW");
let marks = [88, 85, 65, 98, 45];

// print whole array
console.log(marks);

// accessing array values
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

// length of array
console.log(marks.length);

// changing the value in array
marks[3] = 100;
console.log(marks);

// adding value in array
marks[5] = 88;
console.log(marks);

// type of array: object
console.log(typeof marks);

// array to string
let b = marks.toString();
console.log(typeof b);

//join the elements of array using seperator
let c = marks.join(" & ");
console.log(c);

// remove last element from array
let d = marks.pop();
console.log(marks); // it will print the updated array
console.log(d); //it will show the removed element from array

// add elemet at last in array
let e = marks.push(100);
console.log(marks); // it will print the updated array
console.log(e); // return new array length

// remove first element from array
let f = marks.shift();
console.log(marks); // modify the original array
console.log(f); // return the removed element from array

// add first element in array
let g = marks.unshift(100);
console.log(marks); // modify the original array
console.log(g); // return new array length

// delete element at any index
delete marks[0];
// delete only removes the element but the index at which it is present, that index will be replaced
// by empty value. the lenght of array wont be changed
console.log(marks);

// concat the array
let h = marks.concat(["hello", "world"]);
console.log(h);

// sorting the array
let i = marks.sort(); // it will sort by alphabetical order
console.log(i);
// to sort in numerical order
let compare = (a, b) => {
  return a - b;
};
let j = marks.sort(compare);
console.log(j);

// reverse the array
let k = marks.reverse();
console.log(k);

// add new elements in the array
let l = marks.splice(1, 2, "hhh", "ggg");
// marks.splice(where to add, how many to remove, what to add)
console.log(marks);
console.log(l); // it will return removed items

// remove the piece from array
let m = marks.splice(0, 2);
console.log(m); // it will return removed items
console.log(marks);
