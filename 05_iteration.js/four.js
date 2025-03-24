const arr = [1,2,3,4,5,6,7,8,9,10]
const filtered_nums = arr.filter( (nums)=> nums>4) // agr braces nhi lga rhe to
const filtered_nums2 = arr.filter( (nums)=> { // agr braces lga rhe to return use krna pdega functions me pdho isko
     return nums>4
})
// console.log(filtered_nums)

//using for Each
const newarr = []
arr.forEach( (nums)=>{
    if(nums>4){
        newarr.push(nums)
    }
})
// console.log(newarr)