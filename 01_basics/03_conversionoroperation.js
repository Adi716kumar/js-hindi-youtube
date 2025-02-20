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

