//#fucntion are two types 
//1st using below the code
//2nd array function is easy to use and write the code

//array function examples like
// addtwonum (a,b) => ({
//     return a+b
// });

function sayMyName(){

    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");

}

// sayMyName()

// function addTwoNumber(Number1, Number2){
//     console.log(Number1+Number2);
    
// }

// addTwoNumber(4,5)

function addTwoNumber(Number1, Number2){
    let result = Number1+Number2
    return result
}

const result = addTwoNumber(3,4)

// console.log("result", result);

function loginUserMessage(username = "sam") {
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));

console.log(loginUserMessage("Anshu"));


function calculateCarPrice(...num1){
    return num1
}

// console.log(calculateCarPrice(200,300,400))


const user = {
    username: "anshu", 
    price: 344
    
}

function handObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handObject(user)
handObject({
    username: "sam" ,
    price:334
})


const myNewArray = [300,400,500,600]

function returSecondValue(getArray){
    return getArray[2]
}

// console.log(returSecondValue(myNewArray));

console.log(returSecondValue(233,4,5,32,));

