//handling multiple parameter using "rest" operator
function calculate(val1,val2,...num1){
    return num1
}

// console.log(calculate(200,400,500,700)) // [500,700] ans
//rest make packets of arguments so val1=200, val2=400, num1=[500,700]


const user = {
    username : "aditya",
    price : 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)

//scope in javascript
var c = 1000
let a = 500
if(true){
    let a = 10
    console.log(`inner vale of a is : ${a}`)
    const b = 20
    var c = 30
}

// console.log(a) //ReferenceError: a is not defined
// console.log(b)  //ReferenceError: b is not defined
console.log(c) //30 var has this problem this is variable takes recently updated value no matter of scope
console.log(`outer value of a is :${a}`) //500 global scope


//nested scope
function one(){
   const username = "aditya"

    function two(){    //will not run if we call only fun "one"
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);// can't access
    two()
}

one();