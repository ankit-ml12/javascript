// scope in javascript is directly related to laxical environment

// function a(){
// console.log(b);
// }
// var b=10;
// a();

// output:- 
// 10
// --------------------------------------------------------

// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// var b=10;
// a();

// output:- 
// 10

// --------------------------------------------------------

// function a(){
//     var b=10;
//     c();
//     function c(){
//     }
// }
// a();
// console.log(b);

// output:- 
// b is undefined
// -----------------------------------------------------
// lexical environment:- if pertical value is not present in there scope then variable try to access that value in the parent scope and then to there parent ....and so on


// cain of all laxical environment  and the parent references is called the scope chain

// and laxical environment is the local memory plus referece to the laxical environment of parent 
//parent means laxical parent in which they are

//child has access of lexical environment of its parent

