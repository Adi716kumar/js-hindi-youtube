const myNumers = [1,2,3,4]

// let new_nums = myNumers.map( (num)=> num+10)
// console.log(new_nums)

//chaining in map
const new_nums = myNumers.map( (num)=>num*10).map( (num)=>num+1)

console.log(new_nums);

//reduce method
const my_total = myNumers.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
}, 0)
console.log(my_total)