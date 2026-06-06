const accountId = 40887
let accountEmail = "kumaranshu76817@gmail.com"
var accountPassword = "12346"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "anshukr3230@gmail.com"
accountCity = "bengaluru"


/* 
prefer not to use var 
because of issue in block scope an functional scope
*/

console.log(accountId);
console.log([accountId, accountEmail, accountPassword, accountCity, accountState])
