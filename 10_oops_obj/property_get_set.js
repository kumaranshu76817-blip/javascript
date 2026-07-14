function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperties(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const anshu = new User("anshukr@gmail.com","34")
console.log(anshu.email);
