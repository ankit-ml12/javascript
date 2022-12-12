// this function is sufficient to handle two argument but not work for more than that
function sum(a, b){
    // console.log(a+b);
    console.log(a+b);
}
sum(10, 20); //30
sum(10, 20, 30, 40); //30

// in above case sum is 30 which is both case but this is wrong in secong case so we use another function

function sum2(...ml){
// here rest operator convert argument in to object form
    console.log(ml);
    console.log(typeof(ml));//object
    let sum=0;
    for ( key in ml) {
        sum+=ml[key];
    }console.log(sum);
}

sum2(10, 20, 30, 40,50) // 150

// we can use rest operator like this
let sum4 = (name, ...ttt) =>{
    for (const key in ttt) {
        console.log(ttt[key]);
    } 
    console.log(name);
}

sum4("ankit" , 10, 20, 30, 40, 50);