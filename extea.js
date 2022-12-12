/*
data type:- Number ,string, boolean, undeined Null Symbol 


12. Explain Higher Order Functions in javascript.
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

Higher-order functions are a result of functions being first-class citizens in javascript.

Examples of higher-order functio



"
13. Explain “this” keyword.
The “this” keyword refers to the object that the function is a property of.

The value of the “this” keyword will always depend on the object that is invoking the function.\



.

14. What do you mean by Self Invoking Functions?
Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. A function declaration cannot be invoked by itself.

Normally, we declare a function and call it, however, anonymous functions may be used to run a function automatically when it is described and will not be called again. And there is no name for these kinds of functions.

15. Explain call(), apply() and, bind() methods.
1. call():

It’s a predefined method in javascript.
This method invokes a method (function) by specifying the owner object.
Example 1:
function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);
        
// Returns "Hello Sandy"	
call() method allows an object to use the method (function) of another object.
Example 2:
var person = {
  age: 23,
  getAge: function(){
    return this.age;
  }
}        
var person2 = {age:  54};
person.getAge.call(person2);      
// Returns 54  
call() accepts arguments:
function saySomething(message){
  return this.name + " is " + message;
}     
var person4 = {name:  "John"};     
saySomething.call(person4, "awesome");
// Returns "John is awesome"    
apply()

The apply method is similar to the call() method. The only difference is that,

call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message){
  return this.name + " is " + message;
}        
var person4 = {name:  "John"};
saySomething.apply(person4, ["awesome"]);
2. bind():

This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
Example with arguments:
var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
detailsOfPerson1();
// Returns Vivek, bike details: TS0452, Thunderbird
16. What is the difference between exec () and test () methods in javascript?
test () and exec () are RegExp expression methods used in javascript. 
We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'.
17. What is currying in JavaScript?
Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

Example of a curried function:

function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4) 
For Example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).

By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.

Let’s see currying in action:

function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12

curriedMultiply(4)(3); // Also returns 12
As one can see in the code above, we have transformed the function multiply(a,b) to a function curriedMultiply , which takes in one parameter at a time


*/


