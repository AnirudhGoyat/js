// console.log( 2 > 1); //true or false 
// console.log( 2 >= 1); //true or false 
// console.log( 2 < 1); //true or false 
// console.log( 2 == 1); //true or false 
// console.log( 2 != 1); //true or false 


//console.log("2" > 1);  // for comparison data type should be same.
//console.log("02" > 1); // for comparison data type should be same.


//*********  avoid such conversion ***************//

console.log(null > 0);  //the reason is that an equality check == and comparison >< >= <= work differently
console.log(null == 0); // comparison convert null to a number , treating it as 0
console.log(null >= 0); // that's why (3)null >=0 is true and (1)null > 0 is false

console.log(undefined > 0);  
console.log(undefined == 0);
console.log(undefined < 0);

// === (strict check) // not only check value but strictly check them ,by checking their data type also

console.log("2" === 2);





