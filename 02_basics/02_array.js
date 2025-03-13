const marvel_heros = ['Thor','iron men','spiderman']
const dc_heros = ['superman','flash','batman']



 marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const carr = marvel_heros.concat(dc_heros)  // concate data without 
//                                             modifying original array
// console.log(marvel_heros)
// console.log(carr)



//"spreading method to concatinate arrays"
const sarr = [...marvel_heros,...dc_heros]
// console.log(sarr)\



const multi_array = [1,2,3,[7,9,0],4,[6,7,[3,5]]]

const flat_array = multi_array.flat(1) // flats array into deisred dimension as passed in parameter
// console.log(flat_array)


console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya")) // creates array from iterable object


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//return a new array from set of elements







