// immediately invoke function expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
    
})();


// () (); // global scope se pllution hota hai to usko hatne  ke liye iife use hota hai

( (name) => {
    console.log(`db connected ${name}`);
    

} ) (`anshu`)


