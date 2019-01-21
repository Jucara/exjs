const readlineSync = require("readline-sync");

let userAge = readlineSync.question("Enter your age : ")

if (userAge >= 18) {

console.log("You're an adult !");

}else{
  console.log("You're not yet an adult !");
}

let usermin = readlineSync.question("Enter a min number : ");
let usermax = readlineSync.question("Enter a max number : ");

if (parseInt(usermin)>parseInt(usermax)){
  console.log("F*ck you reptilians");
}
else{
  let usercurrent = readlineSync.question("Enter a current number : ");
  if (parseInt(usercurrent)>= parseInt(usermin) && parseInt(usercurrent) <= parseInt(usermax)){
    console.log(usercurrent);
  }else {
    console.log("It's not a current number");
  }
}

for ( let i=1;i<=100;i+=1){
  if((i % 2)==0){
    i2=i/2;
    console.log(i2);
  }else{
    i3=i*3;
    console.log(i3);
  }
  }
  let userask42 = readlineSync.question("What's your favorite number :");
    if (parseInt(userask42)===42){
      console.log("Your favorite number is : 42");
    }
    else {
          while (parseInt(userask42)!= 42){
         userask42= readlineSync.question("Are you sure ? ")
  }
}
let userday = readlineSync.question("Enter a number between 1-7 : ")
if(parseInt(userday)===1){
  console.log("Monday");
} else if (parseInt(userday)===2) {
  console.log("Tuesday");
}else if (parseInt(userday)===3) {
  console.log("Wednesday");
}else if (parseInt(userday)===4) {
  console.log("Thursday");
}else if (parseInt(userday)===5) {
  console.log("Friday");
}else if (parseInt(userday)===6) {
  console.log("Saturday");
}else if (parseInt(userday)===7) {
 console.log("Sunday");
}else {
  console.log("I said F*ck you reptilians");
}
 let userask=0;
let n = readlineSync.question("Enter a number : ");
for (let i = 1; i <= parseInt(n); i++) {
  userask2= readlineSync.question ("Enter a new number : ");
  userask= userask + parseInt(userask2);

}
console.log(userask);
