// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calss, cryptography, network
//     setTimieout(() => {
//         console.log('Async task in completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Anshu",
            email: "kumarAnshu76818@gmail.com"
        })
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "anshu", password: "1234"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => {console.log("promise is either resolve and rejected they always run")})

//seond way to handle error in promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "Anshukumar",
                colleg: "vivekananda global university"
            })
        } else{
            reject("Error: js went wrong")
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response); 
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()
    
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/kumaranshu76817-blip')

//     const data = response.json()

//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }
    
// }   

// getAllUsers()


fetch('https://api.github.com/users/kumaranshu76817-blip')
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})