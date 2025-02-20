let score = "3abc"
console.log(typeof score) // string type

// to Number()conversion.
let valueinNumber = Number(score) //converted into number
console.log(typeof valueinNumber)  // number type
console.log(valueinNumber)  //gives NaN not a number because 3abc in NaN 
// "33" => 33
// "33abc" => NaN   => but type is number                     
// true => 1; false =>0
// null => 0
//Note-> if we convert null type to number it will print 0.

//to boolean conversion
// 1=> true, 0 = false
//"" => false
//"aditya" => true

// to String conversion.
let x = 56
let strnumber = String(x)   // gives 56 not "56",
console.log(strnumber)
console.log(typeof strnumber)



// **********************operations ************************
let value = 3
let negvalue = -value
console.log(negvalue)
let str1 = "aditya "
let str2 = "kumar"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);  // 12
console.log(1+"2");  // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32

console.log(true);  //true
console.log(+true);   //1

let num1,num2,num3
num1 = num2 = num3 = 2+2;
console.log(num1,num2,num3);   // 4 4 4

let gamecounter = 100
gamecounter++;
console.log(gamecounter)

// link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

