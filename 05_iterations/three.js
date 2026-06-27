//for of

// [" ", " "] in array doing string

// [{}, {},{} ] in array fill object

const arr = [1,2,3,4,5]

for (const element of arr) {
    console.log(element);
    
}

const greetings = "hellow world !"

for (const greet of greetings) {
    console.log(greet);
    
}


//maps

const map = new Map()

map.set('In',"INDIA")
map.set('USA', "United state of America")
map.set('fr',"france")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}


const myObject = {
    'game1': 'Nfs',
    'game2': 'spiderman'
}

//object cannot be itrbale

// for (const [key, values] of myObject) {
//     console.log(key ,":-", values);
    
// }

