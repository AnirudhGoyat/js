const accountId =123455
let accountEmail = "anirudhgoet@gmail.com"
var accountPassword = "12345"
accountCity = "Gurugram"

let accountState

// accountId= 2 //not allowed 
accountEmail  = "ani@gmail.com"
accountPassword = "212121"
accountCity = "delhi" 


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
 