/*
A closure is a feature of JavaScript that allows inner functions to access their outer scope. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. A block is also treated as a scope since ES6. Since JavaScript is event-driven so closures are useful as it helps to maintain the state between events.
*/

function foo()
{
	var b = 1;
	function inner(){
		return b;
	}
	return inner;
}
var get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());
