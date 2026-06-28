const coding = ["python", "ruby", "java"]


//for each cannot be compare the function
const values = coding.forEach( (item) => {
    console.log(item);
    
})

// console.log(values);

const myNums = [1,2,3,4,5,6]

//using basic filters
//ek line me print nahi karna hai
const newNUms = myNums.filter( (num) => {
    return num>3
} )

// dono me se ko bhi use kar sakte hai
//ek line print karna hai to 
// const newNUms = myNums.filter( (num) => 
//      num>3
//  )

console.log(newNUms);




//using for each for compare the value

const nums = [1,2,3,4,5]
const newNums = []

nums.forEach( (num) => {
    if(num>2){
        newNums.push(num)
    }
})
console.log(newNums);



//example of using filters
const books =  [
    {title: "first boook", genre: 'histor', publish: 1234},
    {title: "second book", genre: 'histor',publish: 234},
    {title: "third book", genre: 'science', publish: 5678}
]
let userBooks = books.filter( (bk) => bk.genre === 'histor' && bk.publish >= 1000)

console.log(userBooks);
