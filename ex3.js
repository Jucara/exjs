const readlineSync = require("readline-sync");

let numb =[1,2,3,4,5];
let numb2 =[100,101,102];
let a=0;
let a2=0;
let copynumb=[];
let copynumb2=[];

for ( let elem of numb){
 a= a + elem;
}
a=a/numb.length;
console.log(a);
for ( let elem of numb2){
 a2= a2 + elem;
}
a2=a2/numb2.length;
console.log(a2);

for(let i=0; i< numb.length;i+=1){
copynumb.push(numb[i]);
}
for (let i=0; i<copynumb.length;i+=1){
console.log(copynumb[i]);
}

copynumb2 = numb2.slice(0,numb2.length);
for (let i=0; i<copynumb2.length;i+=1){
console.log(copynumb2[i]);
}
console.log(Math.max(...numb));
console.log(Math.min(...numb2));
