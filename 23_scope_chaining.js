/* Scope:

    -Scope in JavaScript actually determines the accessibility of variables and functions at various parts in one’s own code or program.

   - In other words, Scope will help us to determine a given part of a code or a program, what variables or functions one could access and what variables or functions one cannot access.

    -Within a scope itself, a variable or a function, or a method could be accessed. Outside the specified scope of a variable or function, the data cannot be accessed.
    
    -There are three types of scopes available in JavaScript: Global Scope, Local / Function Scope, and Block Scope. Let us try to understand each one of them briefly in the following section.  

*/

/*
Global Scope:

Variables or functions (or methods) which are declared under a global namespace (like area or location) are determined as Global Scope. 
It means that all the variables which have global scope can be easily accessed from anywhere within the code or a program.
*/

// Global Scoped Variable
var global_variable = "gg";

// First function...
function first_function() {
  return global_variable;
}

// Second function...
function second_function() {
  return first_function();
}

console.log(second_function());

/*
  Local or Function Scope:

Variables that are declared inside a function or a method have Local or Function Scope.
It means those variables or functions which are declared inside the function or a method can be accessed within that function only.
  
  */

function main_function() {
  // Variable with Local Scope...
  var a = 2;

  // Nested Function having Function Scope
  var multiply = function () {
    // It can be accessed and altered as well
    console.log(a * 5);
  };

  // Will be called out when main_function gets called
  multiply();
}

// Display's the result...
console.log(main_function());

// Throws a reference error since it
// is a locally scoped variable
console.log(a);

// Throws a reference error since it
// is a locally scoped function
multiplyBy2();

/*
Block Scope:

Block Scope is related to the variables or functions which are declared using let and const since var does not have block scope.
Block Scope tells us that variables that are declared inside a block { }, can be accessed within that block only, not outside of that block.
*/

{
  let x = 13;
}
// Throws a reference error
// since x is declared inside a block which
// cannot be used outside the block
console.log(x);

/*
Scope Chain:

JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.
*/

// Global variable
var global_variable = 20;

function main_function() {
  // Local Variable
  var local_variable = 30;

  var nested_function = function () {
    // Display the value inside the local variable
    console.log(local_variable);
  };

  var another_nested_function = function () {
    // Displays the value inside the global variable
    console.log(global_variable);
  };

  nested_function();
  another_nested_function();
}

main_function();
