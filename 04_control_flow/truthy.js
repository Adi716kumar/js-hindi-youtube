const email = "aditya@gmail"
if(email){
    // console.log("got user email")
}
else{
    // console.log("don't have user email")
}

//falsy values
// false, 0, -0, BigInt 0n, null, undefined, NaN


//truthy value
//"0", 'false', " ", [], {}, function(){}.

const useremail = []
if(useremail.length === 0){
    // console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    // console.log("object is empty");
}

//Nullish Coalescing Operator (??): null udefined  ---> null aur undefined  pe dusri pass ki hui value dega
let val1;
let a = null
let b = undefined
let c = 10
 val1 = a ?? c //10
 val1 = b ?? c //10
 val1 = null ?? 20 ?? 100 //20 first value will be assigned
// console.log(val1)

//terniary Operator
//condtion ? true : false
