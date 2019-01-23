const readlineSync = require("readline-sync");
let age = 25;
let mumAge = age+30;
age+= 12;
console.log(age);
let name ="Julien";
let namemum = "Marie";
console.log("My name is" + name);
let htmlBadges = readlineSync.question("How many HTML badges do you have?");
let cssBadges = readlineSync.question("How many CSS badges do you have?");
let totalBadges = parseInt(htmlBadges) + parseInt(cssBadges);
console.log("Woa , you have" + totalBadges + "!");

console.log("It's works")
