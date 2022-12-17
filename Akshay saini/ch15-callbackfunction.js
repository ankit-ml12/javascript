// What is callback function in js?
function x(){
}
x(function y(){})

// when you call and pass a function into another function then the argument function is called the callback function.
// Here in code y is the callback function 

// set time out is also callback function 
// in settime out function we use settime out as a main function and the function we pass into it is call back function 
//ex:-
// setTimeOut(function(){
// }, 5000);

// when we set eventlistener they also behave like callback function
// ex:-
// document.getElementById("clickMe")
// .addEventListener('click', function(){

// })
// here the function present inside is call back function which work once some one click on the button

// remember this callback function are comeinto the call stack and then executed


// ===============================================================

// closure with callback function
// function attacheventlistener(){
//     let count=0;
//     document.getElementById('clickMe').addEventListener('click', 
//     function(){console.log("button cliked", ++count)});
// }
// attacheventlistener();



// ==================================================================
// why we remove event listner
// even listner are heavy that means they take memory 
// they cannot be free because let suppose they are tacking memory for count variable and we don't know when someone click on the button

// i.e, why we remove event listner when we are not using them
// so when we remove the even listner then all the vaiable which are connected which that event listner are garbage collected