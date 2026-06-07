// primitive

const { use } = require("react");

// 7 types : string, Number, Boolean, null,undefined, symbol, BigInt, 

const score = 100
const screValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 384945845594859485;

//Refernce (Non primitive)

//Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "anshu",
    age: 19,
}

const myFunction = function(){
    console.log("hellow, world");
}
console.log(typeof anotherId);




//--------------------------------------------

// stack (primitive), heap (Non - primitive)

let myYoutubeName = "anshukr"

let anotherName = myYoutubeName
anotherName = "anshusah"

console.log(anotherName);
console.log(myYoutubeName);


let user = {
    email: "anshukr@google.com",
    upi: 7361099858
}

let user2 = user
user2.email = "anshu@google.com"

console.log(user);
console.log(user2);


