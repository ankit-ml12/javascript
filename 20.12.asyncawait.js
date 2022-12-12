//async is made in order to reduce the complecation of promise fucntion
// whenever we declare async it means it return promise


// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
let test = async ()=>{
     console.log("2");
       console.log("3");
     console.log("4");
      console.log("5");

    return "hello";
}
console.log("1");

test().then((result)=>{
    console.log(`result :${result}`);
}).catch((error)=>{
    console.log(`error : ${error}`);
})
console.log("completed");
// await is used to tell function please first stop working from await and complete remaining work come here letter after completing other code



//i we want to run program again and again we don't need to write then and catch again and again 

// instead we can write like this
let ml = async()=>{
    try {
     
    } catch (error) {
        
    }
}

ml();