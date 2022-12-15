// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log("hello ankit");

// }
// x()

// output:- 
// hello ankit 
// 1 // after 3 sec

// ==========================
// function x(){

//     for(var i=1; i<=5; i++){ 
//         setTimeout(function(){
//           console.log(i);
//         },  i*1000);
//     }
// console.log("hello india");
// }
// x()

// output:-
// hello india
// 6
// 6
// 6
// 6
// 6


// =======================================
// function x(){

//     for(let i=1; i<=5; i++){ 
//         setTimeout(function(){
//           console.log(i);
//         },  i*1000);
//     }
// console.log("hello india");
// }
// x()

// output:-
// hello india
// 1
// 2
// 3
// 4
// 5
// ============================================
function x(){

    for(var i=1; i<=5; i++){
        function close(x){ 
        setTimeout(function(){
          console.log(x);
        },  x*1000);
    }
    close(i);
}
console.log("hello india");
}
x()

// output:-
// hello india
// 1
// 2
// 3
// 4
// 5
// ============================================