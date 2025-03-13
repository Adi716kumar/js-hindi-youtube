const score = 400
console.log(score);

const balance  =  new Number(100)
console.log(balance);

const y = balance.toString()
console.log(typeof y);
console.log(y.length)

console.log(balance.toFixed(2));

const num = 1123.896
console.log(num.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++++Math++++++++++++++++++++
//built library in js
console.log(Math);
console.log(Math.abs(-98));
console.log(Math.round(9.6))
console.log(Math.ceil(8.4))
console.log(Math.floor(8.4))
console.log(Math.min(1,5,9,4),Math.max(3,6,8,5));

console.log(Math.random());//give any random value btw 0<=x<=1

console.log(Math.random()*10 + 1)
//formula to generate number between given range
const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min)