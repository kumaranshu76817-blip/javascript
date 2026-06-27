//for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is best number");
        continue;
    }
    console.log(element);
    
    
}


// for (let i = 0; i <= 5; i++) {
//     let row = "";
//     for(let j=0; j<= i; j++){
//         row += "* "
        
//     }
//     console.log(row);
    
    
// }

for (let i = 0; i <=10; i++) {
    for (let j = 0; j <=10; j++) {
        console.log(i +"x" + j + " =" + i*j);
        
    }
    
}


//for loop for arrays

let myArray = ["flash", " batman", "superman"]


console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//break continue

for (let index = 0; index < 10; index++) {
    console.log(`value of i is ${index}`);
    
    if(index == 5){
        console.log(`detected 5`);
        break
        

    }

    console.log(`value of i is ${index}`);
    
    
}
