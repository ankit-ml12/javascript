//Promise:- promise is an event which is tentetively might be fullfilling in the future or might be not but it's give you response back that i did get completed or not.

// promise : 
// three stage :- pending, fullfield, rejected
/* promise syntext

 let prom = new Promise(function(resolve, reject){
    
    if(condition ){
        resolve()
    }else{
        reject()
    }
 })
*/

//  let understand one way of doing this

let complete = true;

let prom1= new Promise(function (resolve, reject){
    if(complete){
        resolve('i am successfull')
    }else{
        reject('i am faileur')
    }
})

console.log(prom1);


function prom3(complete){
    return new Promise(function(resolve, reject){
        console.log("fathching data, Please Wait");
        setTimeout(()=>{
         if(complete){
            resolve('I am successfull')
         }else{
            reject('i am failed')
         }
        }, 3000)
    }
    )
}

prom3(true)
.then((result)=>{
    console.log( result);
})
.catch((error)=>{
    console.log( error);
})