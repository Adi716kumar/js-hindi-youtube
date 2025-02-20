// console.log(2>1) /// true
console.log("2">1)
console.log("02">1)  // this type of comparison give unpredictable results that is why typescript is used because it dont allow thsi kind of comparison

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//The reason is that an equality check == and comparison > < >= <= work differently
//comparison convert null to a number, treating it as 0.
// That's why(3) null>=0 is true and (1)null>0 is false


//strict check ===
console.log("2"==2)  // gives true because conversion occur
console.log("2"===2) // false strict check checks values as well as data types
