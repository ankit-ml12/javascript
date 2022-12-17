
// function statement:- 
function a(){
}
// this is function statement
// write function and give name
// this way of creating a function is known as a function statement 



// function expression:- 
// we can assign a function to some variable that means function act's like value 
var d= function c(){
} 
//this is called the function expression

// difference between function statement and expression:-
// it is of hoisting one is function and another is undefined 
// so during one is assign a function and anther is behave like variable so it assign undefine.


// function declaration :- function statement is also known as function declaration


// anonymous function:- function without a name, they does not have their own identity 
// functin (){

// }

// this give us syntex errror
// they are used when function are used as value like you can see in function expression



// Named function expresssion
// when we use anonymous function with a name then that function is called named function expression

// ex:- 
var b= function name(){

}

// but when you run name() then this function will give error because name function does not created into the outer scope(memory) during memory allocation but you can use this neme() inside the name function itself like
// var b= function name(){
    //   name()
// }  



// arguments and parameter

// var ml = function cd(hello, delhi){

// }
// ml(str, str2);
// here hello and delhi are paramenter, identifier
// but str, and str2 are the arguments
// you can also pass function as a argument into another function
// and we can also return a function from a function


// first class function 



//  the ability of functions to be used as values and can be pass this in an argument to another functions and can be returned from the functions is this ability is known as first class functions in javascript.


//functions are first class citizen :this is similar to first class function the ability to used like value and all three possibility of function make a function a first class citizen.

// Arrow function:- 
// we will learn letter