// regular expression

/* 
A regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations.
*/

const regex = "";
const text =
  "i am a very very nice very veryy boyy 8 5 7 77 of in very boy merry cherry";

// replace any word of string
let a = text.replace("very", "VERY"); // it will replace only first very
console.log(a);
let b = text.replaceAll("very", "VERY"); // it will replace all very
console.log(b);

// replace all very using regex
let c = text.replace(/very/g, "VERY"); // it will replace all very{ g --> globally}
console.log(c);

// match particular word using regex
let d = text.match(/.ery/g); // it will match any word that is ery{. char is used to take any cgar instead of .}
console.log(d);

// match digit in a string using regex
let e = text.match(/\d/g); // it will match any digit in the string
console.log(e);

// match character set using regex
let f = text.match(/[a-e]/g); // it will match any character in the set [a-e]
console.log(f);

// check whether strig is strating with speific char using regex
let g = text.match(/^z/g); // it will match any character that is starting with
console.log(g);
