// close:- a function with a reference to its outer environment together forms a closure
// in other words :- closure is a combination of its function and its lexical scope bundle together forms a closure

// it is like each and everyfunction in javascript has access to its outer lexical environment that means access to the variables and function which are present into the encioronment of its parents. that means when this function is executed in some other scope not in its original scope it still remember its outer skill environment where it was originally present in the code

// ex:- 
// function outer(){
//     var i= 10;
//     function inner(){
//         console.log(i);
//     }
//     return inner;
// }

// outer()()
// equal to 
// var close = outer();
// close();

// when you move var a=10 to after inner() function it still form the closure
// when we check var to let it still work the same way



// what happen in this case:-
// function outer(b){
//     var i= 10;
//     function inner(){
//         console.log(i, b);
//     }
//     return inner;
// }

// var close = outer(b);
// close();

// even we pass b this work the same way because b is also part of inner outer lexical environment


// what about below case:- 

// function outest(){
//     var c=40;
// function outer(b){
//     var i= 10;
//     function inner(){
//         console.log(i, b, c);
//     }
//     return inner;
// }
// return outer()
// }
// var close = outest()("hello ankit");
// close();

// still it form the closure with the outest function 



//conflicting variables

// function outest(){
//     var c=40;
// function outer(b){
    
//     function inner(){
//         console.log(i, b, c);
//     }
//     let i= 10;
//     return inner;
// }
// return outer()
// }
// let i=100;
// var close = outest()("hello ankit");
// close();

// in this case inner function make closer with the i=10variable so behave the same way that is it print 10 but if  we do not have i=10 then it print 100
// it both are not prsent then inner function is unable to find value of i in its scope chain so it give reference error

// closure advantages:- 
// ------
// data hiding and encapsulation

// data hiding 
// var counter a= 10
// function increment(){
//     counter++
// }
// here anyone can change value of counter

// but we can protect it using
// function counter(){
//     var count=0;
//     return function incrementcounter(){
//         count++;
//     }
// }
// now you can not directly edit this count variable

//now it is like private variable =====================================================================



// disadvantages of closure
// overconsumption of memory
// some time this close garbage value is not 
// lead to memory leak
// read more
// ====================================================

// what is garbage collecter:- 
// it is program in the browser or inthe javascript engine which freeze the unutilised memory.
// means if their are unutilised variable then garbage collecter take them outside the memory or free the memory wherever it found out this variable is no longer needed 
// ========================================================
// example of garabage collection with clouser

function a (){
    var x=10;
    return function b(){
        console.log(x);
    }
}

var s= a();

// now x is make clouser with functin b so our garbage collection is unable to remove this x so this is how it easly fill the memory available


