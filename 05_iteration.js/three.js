// for each loop by defualt of array
const arr = [1,2,3,4,5,6]

arr.forEach(  function (i) {  //here name of function is not defined because it is callback function
    // console.log(i);
})

//using arrow function
arr.forEach( (i)=>{
    // console.log(i)
})

//fiving reference functio
function printme(i){
    // console.log(i);
}
arr.forEach(printme)

//can give more argument in foreach
arr.forEach((item,index,arr)=> {
    // console.log(item,index,arr)
})

//array of object
const lang = [
    {
        lang_name : "javascript",
        rank : 2,
    },
    {
        lang_name : "cpp",
        rank : 3,
    },
    {
        lang_name : "python",
        rank : 1,
    }
]

lang.forEach((item)=>{
    console.log(item.lang_name, item.rank);
})