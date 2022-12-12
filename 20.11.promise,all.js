// promist.all() rum then if and only if all the function return true else it return catch


let p1= new Promise(function (resolve, reject){
   console.log("first promise");
   resolve("first");
})


let p2= new Promise(function(resolve, reject){
        console.log("second promise");
        resolve("second");
})

Promise.all([p1, p2]).then((result)=>{
console.log(`Reault: ${result}`);
}).catch((error)=>{
    console.log(`Error: ${error}`);
}) 

