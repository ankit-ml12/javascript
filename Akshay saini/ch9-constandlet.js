// let and const declaration are hosited in js but differently way or we can say they are in the temporal deadzon for timebeing

let a=10;
console.log(a);
var b=100;
// error:- a can access after initilizatin not before it

// js allocate memory to both a and b but this is happen in diffent way
// var are attech to gloabl object and store inside global object but let are not they are allocated to different memory
//so you can not access this let and const before you put value in them


// temporal dead zone :- the time between since this let variable is hoisted and till it initilise some value and this time between them is called temporal dead zone

//so wherever you try to access any element between temporal dead zone it give reference errro
// here a (or let ) keyword is not attenched to windows space they are store in seperate storage so you can not excess them with the help of window.a


// you also cannot reinitilise the let keywords

//const also work similar to let only differnce is you can not redeclear value of const 
