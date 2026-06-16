
{} //scope

if(true){
    let a = 10
    const b = 20
    var c = 30

}

// console.log(a);
// console.log(b);
// console.log(c); 


function one (){
    const userName = "anshu"
    function two (){
        const website = "youtube"
        console.log(userName);
        

    }
    // console.log(website);
    two()
}
one()
if(true){
    const userName = "anshu"
    if(userName == "anshu"){
        const website = "youtube"
        console.log(userName + website);
        
    }

}

// console.log(userName);



// ++++++++++++++++++++++++intersting++++++++++++++++++

function addone(num){
    return num +1
}
console.log(addone(4));


//hosting
const addTwo = function(num){
    return num +2
}
console.log(addTwo(5));
