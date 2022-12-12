 
 function sum(name , ...arg){
    console.log(typeof(arg));
    for (const key in arg) {
        console.log(arg[key]);
           }
    }


let arr =[10, 20, 30, 40,50];
sum("hollo", arr); //   10, 20, 30, 40, 50
sum("hollo", ...arr); 
//10
//20
//30
//40
//50

let arr2 =[10, 20, 30, 40,50];
console.log(arr2);     //[ 10, 20, 30, 40, 50 ]
console.log(...arr2);  //10 20 30 40 50
console.log([...arr2]);//[ 10, 20, 30, 40, 50 ]

// we can concate two array using spread operator
let arr3 = [...arr, ...arr2]
console.log(arr3);
//same thing we can also use with opeject