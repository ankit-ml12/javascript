function x(){
var a=7;
function y(){
    console.log(a);
}
return y;
}
var z= x();
console.log(z);
z();
// closure:- is a function that bind together with its lexical environment
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// the beauty of function in js is you can pass function as a paramenter and you can also able to return the function

// wheneven a function is return it allways remember it's lexical scope
// so when we are returning y then that means we are returning whole clouser {function with its lexical scope};

// 