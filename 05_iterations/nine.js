// #reduce

const myNums = [1,2,3,4]


//using function 
// const myTotal = myNums.reduce(function (acc,currentval){
//     console.log(`acc: ${acc} and currval: ${currentval}`);
    
//     return acc + currentval
// }, 0)



//using array function
const myTotal = myNums.reduce( (acc, curr) => acc+ curr, 0)

console.log(myTotal);


//example of reduce
const shoppingCart = [
    {
        coursBuy: "js course",
        price: 999
    },
    {
        coursBuy: "data science",
        price: 1288
    },
    {
        coursBuy: "python",
        price: 2394
    },
    {
        coursBuy: "java",
        price: 345
    }
]

const totalMoney = shoppingCart.reduce( (acc, item) => acc +item.price, 0)

console.log(totalMoney);

