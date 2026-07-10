class User {
    constructor(userName) {
        this.userName = userName
    }
    logMe(){
        console.log(`USERNAME IS ${this.userName}`);
        
    }
}

class Teacher extends User {
    constructor(userName,email, password) {
        super(userName)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.userName}`);
        
    }
}

const anshu = new Teacher("anshu","anshu@gmail.com","123")

anshu.addCourse()