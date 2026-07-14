const User = {
    _email: 'anshu@gamil.com',
    _password: "slj",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}