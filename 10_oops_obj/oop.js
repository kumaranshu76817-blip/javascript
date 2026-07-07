const user = {
    username: "anshu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details form datbase");
        console.log(`username: ${this.username}`);
        console.log(this);
        
        
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());

console.log(this);


// constructor function
// const promiseOne = new Promise()
// const date = new date()

function User1(username, loginCount , isLoogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoogedIn = isLoogedIn;
    // return this;

    this.gretting = function(){
        console.log(`welcome ${this.username}`);
        
    }
}

const userOne = new User1("anshu",48, true)
console.log(userOne.constructor);

// #new
// new word ke bare me two line
// empty object create hota hai
// new object create hota hai
// constructor call hota hai
// this create hota hai and all return ho jayega
