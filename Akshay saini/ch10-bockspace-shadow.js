// block:-  is define by {} this brackets
// block are also compund statement means they are combine multiple js statement into groupt
// ex:- 
// {
//     let m =10;
//     var s=50;
// }

// we group multiple statement in to block so that we can use it where js expect one statement ex:- 
// if(true){
//     let m =10;
// //     var s=50;
// }

// block scope:- what all variables and function we can access inside this block
// {
//     var a= 10;
//     let b= 320;
//     const c= 40;
// }

// here b and c are inside block scope while a is globe scope i.e, why let and const are block scope
// which means they are stored into seperate memory space which is reserver for this block
// you can not access let and const outside the block



// shadowing:- 
// 
// var a= 10
// {
//     var a  =100;
//     let b  =200;
//     const c  =300;
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// console.log(a);

// output:- 
// 100
// 200
// 300
// 100

// let b= 10
// {
//     var a  =100;
//     let b  =200;
//     const c  =300;
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// console.log(b);

// output:-
// 100
// 200
// 300
// 10

// in the above case we have three types of scope
// global :- where this var variables keyword is atteched
// script :- where let hosited element is palced  
// block :- where let and const block elememnt assign 

// shadowing :- the processing of changing value of b from global and local by creating a different variable with the same name with let keyword is called shadowing which happening with b variable in above example

// in function also shadowing behave the same way

// you can do shadowing with the let variable to var variable this is illigal shadowing
// ex:- 
// let a = 10 
// {
//     var a=20
// }

// but you can do opposite from var to let
// var a = 10 
// {
//     let a=20
// }


// block also follow the chain pattern



//revise again