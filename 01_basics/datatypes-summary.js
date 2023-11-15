//Javascript is a dynamic typing language. 
//When you declare a variable, you do not need to specify what type this variable is.



// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol (take make any value unique)

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol ('123')

// console.log(id)
// console.log(anotherId);
//console.log(id === anotherId);

const bigNumber = 5646546543217998454644n // if we add 'n' in last large number get converted into bigInt  and then we can solve using this.


// Non-Primitve (call be reference)

// 3 types : Array, Objects, Functions

const heros = [ "shaktiman ", "naagraj", "doga"]

let myObj = { 
    name: "anirudh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


console.table([ ["anotherId", typeof anotherId] , ["myFunction" ,typeof myFunction], ["heros",typeof heros], 
                    ["id",typeof id] , ["score",typeof score], ["scoreValue",typeof scoreValue] ,
                    ["myObj",typeof myObj] ,  ["bigNumber",typeof bigNumber], ["isLoggedIn",typeof isLoggedIn] ,
                        ["outsideTemp",typeof outsideTemp], ["userEmail",typeof userEmail] ] 
                        );