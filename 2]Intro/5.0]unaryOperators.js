//!                         Unary operator

/*
? Use of unary operator.

* Syntax 1 =>    variable++   or    variable--
* Syntax 2 =>    ++variable   or    --variable

Please note that it will only work on the numeric datatypes, dont use it on strings or other datatypes.

*/

let a =1;

a++;
++a;
console.log(a);

let num = 0;
console.log(num++)
console.log(num++)
let num1 = 0;
console.log(++num1)

a--;
console.log(a);

--a;
console.log(a);

let b = a++;
// b = a;
// a = a +1;
console.log(b); // 1

let c = ++b;
// b = b + 1;
// c = b;
console.log(c); //2

c = c * 2;

// Same as above.
c *= 2;


