const coding = ["js","python","java","cpp"]
//first function
coding.forEach(function (item){
    console.log(item);
    
})

//function
coding.forEach( (val) => {
    console.log(val);
    
})


function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)


coding.forEach( (item , index, arr) => {
    console.log(item,index,arr);
    
})


const myCoding = [
    {
        langugaeName: "javascript",
        languagefileName ="js"
    },{

    },
    {
        
    },{

    }
]

myCoding.forEach((item) =>{
    console.log(item.langugaeName);
    
})