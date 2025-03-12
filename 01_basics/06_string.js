const name = "aditya"
const repocount = 5
console.log(name+repocount+"github")//older version no longer used in modern coding

//in modern days we use backticks string interpolation we will use place holders 
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
//syntax to declare strings
const game = new String('free-fire')

console.log(game[0]);
console.log(game.__proto__);
//some important string methods/functions
console.log(game.length);
console.log(game.toUpperCase())
console.log(game.charAt(2));
console.log(game.indexOf('e'));//gives first position of occurrence

//string slicing
const newgame = game.substring(0,4) //0 to 4-1.
console.log(newgame);

const game2 = game.slice(4,-6) // we cant reverse the string using this method but can use -ve indexing +(0 to n-1)   -(-n to -1)
console.log(game2)

const car = "    aston martin   ";
console.log(car)
console.log(car.trim()); // remove staring and ending spaces

const url = "https://aditya.com/aditya%20kumar"
console.log(url.replace('%20','-'));
console.log(url.includes('aditya')); //checks the given string is present or not

// string splitting
const x = "my-name-is-aditya"
console.log(x.split("-")) // gives array/list


