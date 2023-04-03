/*
    4 Ways to Declare a JavaScript Variable:
        Using var
        Using let
        Using const
        Using nothing

*/

// Variables are containers for storing data (storing data values).

// Always declare JavaScript variables with var,let, orconst.

/*      var
    The var keyword is used in all JavaScript code from 1995 to 2015.
    If you want your code to run in older browsers, you must use var.
*/

/*  const
If you want a general rule: always declare variables with const.\

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
*/

/* let
If you think the value of the variable can change, use let.

Variables defined with let can not be redeclared.

Variables defined with let must be declared before use.

Variables defined with let have block scope.
{
  let x = 2;
}
// x can NOT be used here
 */

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
