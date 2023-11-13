let score = true

// console.log(typeof score)
// console.log(typeof(score))


let valueInNumber = Number(score) // Number , String etc can be used this way to convert the datatypes from one form to another form


// console.log(typeof valueInNumber)
// console.log(valueInNumber); // NaN is a special type



//  "33" => 33
//  "33abc" => NaN (Not a number)
//  null => 0
//  undefined => NaN
//  true => 1 ; false => 0

let isLoggedIn = "anirudh"

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);


//  1 => true ; 0 => false  // number conversion can also be done to boolean
//  "" => false
//  "anirudh" => true

let someNumber = 33

let stringNumber = String (someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************** Operations **********************


let value = 3 
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2  = " anirudh"

let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" +  2 + 2 ); // string is 1st to taken as string 
// console.log( 1 +  2 + "2" ); // 1st number so value calculated and then acted as string
 
// console.log( true + false);
// console.log(+"")

let num1, num2, num3

// num1 = num2 = num2 = 2+2  // not readable 

let gameCounter = 100
++gameCounter
console.log(gameCounter);

