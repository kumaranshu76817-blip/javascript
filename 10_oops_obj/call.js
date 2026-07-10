function setUserName(userName){
    //complex DB calls
    this.userName = userName
    console.log("this is called in the from if you want somthing there aret w al;kjkasdf;lkjs fif you ;lkjasdf df;lkljasdf;lkjasd asds;lkjasdf assd;lkjasdsf as;flkjasd;lkj");
    
}


function createUser(username, email, password){
    setUserName.call(this , username)
    this.email = email
    this.password = password
}

const anshu = new createUser("anshu kumar", "chai@gami.com","283")

console.log(anshu);
