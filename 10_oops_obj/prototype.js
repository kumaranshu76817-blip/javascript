// let myName = "anshu    "

// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.anshu = function(){
    console.log(`anshu is present in all objects`);
    
}

Array.prototype.heyAnshu = function(){
    console.log(`anshu says hello`);
    
}

heroPower.anshu()
myHeros.anshu() 

myHeros.heyAnshu()  



// # INHERITANCE 

const user2 ={
    name: "chai"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const  TASupport = {
    makeAssigment: 'js Assigment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user2


//Moder Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "anshu     "

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`true leangth is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"anshu".trueLength()
"iceTea".trueLength()