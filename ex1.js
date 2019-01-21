const readlineSync = require("readline-sync");

let name = "Gerard";
let firstName = "Lambert";
let city ="Paris";
let userfirstName = readlineSync.question("Enter your first name :");
let userName = readlineSync.question("Enter your name :");
let usercity = readlineSync.question ("Enter your city :");
let shoesize = readlineSync.question("Enter your shoe size :");
let birthyear = readlineSync.question("Enter your birth year :");

console.log("C'est l'histoire de " + userName + userfirstName + " qui aimait bien parsemer ses pieds taillant un bon " + shoesize + " de crème datant de " + birthyear + "à " + usercity);
