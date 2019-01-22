const readlineSync = require("readline-sync");

let calcSurface = (l,w) =>{
  return l*w;
}

let l= readlineSync.question("What's the length of the rectangle ?");
let w= readlineSync.question("What's the with of the rectangle?");

console.log("The surface of the rectangle is " + calcSurface(parseInt(l),parseInt(w)));

let rand10 = ()=>{
return parseInt(Math.floor(Math.random()*10));

}
rand10();

let arr = [];
let multiRand = (n)=>{
for (let i = 0; i < parseInt(n); i++) {
arr.push(rand10());
}

}

let n= readlineSync.question("How many random numbers do you want ?");
multiRand(n);
console.log(arr);
let moy=0;
let average = () =>{
  for (let i = 0; i<parseInt(n);i++){
    moy= parseInt(arr[i])+moy;
  }
    return moy/n;
}

let min =()=>{
  let mini = arr[0];
  for (let i=0;i<parseInt(n);i++){
    if (mini>parseInt(arr[i])) {
      mini=parseInt(arr[i]);
    }
      }
      return mini;
  }


let maxi=0;
let max = () =>{
  for (let i=0;i<parseInt(n);i++){
    if (maxi<parseInt(arr[i])){
      maxi=parseInt(arr[i]);
    }
  }
  return maxi;
}
  console.log(max());
    console.log(min());
      console.log(average());

let calcDistance = ()=> {
  return Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));
}
let x1 = readlineSync.question("Point x1 :");
let x2 = readlineSync.question("Point x2 :");
let y1 = readlineSync.question("Point y1 :");
let y2 = readlineSync.question("Point y2 :");
console.log(calcDistance());
let a = readlineSync.question("Entre un nombre :");

var result
let factorial = (a) =>{
  if (a<2){
    return 1;
  }else{
    result = (a*factorial(a-1));
    return result;
  }

}
console.log(factorial(a));
