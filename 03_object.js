//singleton
// Object.create

//object literals

// const mySym = symbol("key1")


const jsUser = {
    name: "anshu",
    "full name": "Anshu kumar",
    // mySym: "mykey1",
    age: 18,
    location: "muzaffarpur",
    email: "kumaranshu76817@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);


jsUser.email = "anshukr3230@gmai.com"
// Object.freeze(jsUser)
jsUser.email = "asdfsf ";
console.log(jsUser);


jsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`);
    
}


jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
