// A JavaScript string is zero or more characters written inside quotes.

// syntax
let name = "Govind";
// let name2 = 'govind';
console.log(name);

// length
let a= name.length;
console.log(a);

// pick character 
let b= name[0];
console.log(b);

// template literals / string interpolation
    /* they are done by using backtick `` to add variables in string we can use this*/
    let fr1= "Vishal";
    let fr2="Govind";
    console.log(`${fr1} is a friend of ${fr2}.`);

// escape sequence character
/* in js we can't use some characters or symbols to use them this idea was introduced */
let c = "Vishal\`"; // \` is  a ESC \n \t theses are also some ESC
console.log(c);

// CAPITALIZE THE STRING
let d = "Vishal";
let e = d.toUpperCase();
console.log(e);

// LOWERCASE THE STRING
let f = "Vishal";
let g = f.toLowerCase();
console.log(g);

// TAKE THE STRING OF CHOICE
let h = "Vishal";
let i = h.slice(2, 4);
let j= h.slice(2); // it will return whole string after 2 index
console.log(i); // it will return sh because 4 is not included

// replace charactyer of string
let k = "Vishal";
let l = k.replace("V", "Vishal");
console.log(l);

// add rtwo strings in one
let m = "Vishal";
let n = "Govind";
let o = m + n;
console.log(o);
let p = m.concat(n);
console.log(p);


// remove spaces of prefix and sufix
let q = "       Vishal         ";
console.log(q);
let r = q.trim();
console.log(r);