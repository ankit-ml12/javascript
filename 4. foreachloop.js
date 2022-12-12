let arr =["darsh", "yash", "ankit", "vishal", "ravi"]
//for each statement templet

//arr.forEach(function(){
    // statement();
// })

const  ml=arr.forEach(function(value, index, arr){
    console.log(`${value} ${index} `);
})
//value is value of arr index wise
//index is index
//arr is whole arr
// it does not work like that