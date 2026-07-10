// ES6

class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return '${this.password()}'
    }
    changeUsername(){
        return `${this.username()}`
    }
}

const chai = new user("anshu", "anshu@gmai.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername);


//behind the scene 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.passwordChange = function(){ 
    return `${this.password()}`
}

const tea = User("anshukumar","tea@gmail.com",'34')

console.log(tea.passwordChange());


