// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "anshu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
 
const regularUser = {
    emai: "anshukr@gmail.com",
    fullname:{
        userFullName :{
            firstName: "anshu",
            lastName : "kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1: "a", 2:"b"}
const obj2= {3: "a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(Object.keys(tinderUser))
// ;console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//destructure in react of 
const course = {
    courseName: "javascript in hindi",
    price: "999",
    courseInstructor: "anshu"
}

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor);


//api concpet
//  jab apna kaam koi aur apna kaam kis aur pe dal dena mena api
//backend values ko kaise likhe jshon me isko api bolega




// {

//     "name": "anshu",
//     "courseName" : "javascrip in hindi"
// }



[
    {},
    {},
    {}
]