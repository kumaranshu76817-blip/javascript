const user = {
    userName: "anshu",
    price: 454,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to website`);
        
    }
}

user.welcomeMessage()
user.userName = "sam"
user.welcomeMessage()


console.log(this);
