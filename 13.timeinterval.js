// setInterval(functionName, millisecond)
// it print your function in  every time you metntion
var a = 0;
let call = () => {
    console.log(a);
    a= a+10;
    if(a==30){
   // we use clearinterval to stop this set Interval     
        clearInterval(ml);
    }
}
let ml= setInterval(call, 1000)
