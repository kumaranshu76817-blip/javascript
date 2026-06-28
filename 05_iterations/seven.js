const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num ) => num + 10)

//jab scope on karnege ko value ko reutrn karn parega

//like example
// const newNums = myNumbers.map( (num ) => { return num + 10})

// console.log(newNums);

// *chaining
// chaining like two baar map  use kar sakte hai

const newNums = myNumbers.map((num) => num * 10)
                        .map((num) => num + 11 )
                        .filter( ( num) => 40)
                        

console.log(newNums);

