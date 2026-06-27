const user = {
    userName: "anshu",
    price: 454,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     // let userName = "anshu"
//     console.log(this);
    
// }
// chai()


const chai =  () =>{
    let userName = "anshu"
    console.log(this.userName);
    
}

// chai()

() => {}   //array function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({user: "anshu"})
    


console.log(addTwo(3,4));