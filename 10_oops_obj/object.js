function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2


console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()




/* 

Here;s what happens behin the scenes when the new keywork is used:

a new object is create: the new keyword intiates th createion of a new javscrip object.  


A protype is linked: the newly create object gets linked to the prototye property of the constructor function. This ean that it has acces to properties and methods dfined on the constructor's prototypes.


The costructor is called: the constructor function is called with the specified argument and this is bound to the newly created object. If no explict return valye is specified from the constructor, javascript assumes this, the newly create object, to be the intended return value.


the new object is returned:  After tje constructor funaction heas been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/