class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`Username: ${this.userName}`);
        
    }
    static createId(){
        return `123`
    }
}

const anshu = new User("anshu")
console.log(anshu.createId());


class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email = email
    }
}

const iphone = new Teacher("anshu","anshu@iphone.com")
console.log(iphone.createId());
