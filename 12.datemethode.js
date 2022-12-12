var  date = new Date();
console.log(date);
//2022-09-15T23:30:46.792Z
let ml= date.toDateString()
// Fri Sep 16 2022
ml= date.getDate()
//16
ml= date.getFullYear()
//2022
ml= date.getMonth()
//8
ml = date.getDay()
//5 today is firday and monday is 1 in this methdo

ml=date.getHours()
ml = date.getDate()
ml = date.getSeconds()
ml = date.getMilliseconds()

let ml2= date.setDate(20)
ml2 = date.setDate(15)
console.log(ml2);
ml2 = date.setFullYear()
ml2 = date.setMonth()

// and many more--