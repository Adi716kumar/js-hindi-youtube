//object literals

//how to use symbol as key
//first define
const mySym = Symbol("key1")

const jsUser = {
    name: "Aditya",
    "fullName": "Aditya srivastava",
    age: 19,
    [mySym] : "myKey1",
    location: "Jaipur",
    email: "aditya@google.com",
    isLoggedIn: false,
    lstLogindays: ["monday","saturday"]
}

//how to access objects
console.log(typeof jsUser.email)
console.log(jsUser["email"]) //good practice
console.log(jsUser["fullName"])//we can only access fullname only through key value pair.
console.log(typeof jsUser)
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

//change object values
jsUser.email = "adityasrivastava.com"
// Object.freeze(jsUser) // to freeze whole object
jsUser.fullName = "aditya kumar"
console.log(jsUser)

//adding functions to object
//in js functions are treated as normal variable
jsUser.greeting = function(){
         console.log("hello js user");
}
console.log(jsUser.greeting); // [Function (anonymous)] //function execute nhi hua hai bs function return back aya hai
console.log(jsUser.greeting());// hello js user

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.fullName}`)
}

console.log(jsUser.greeting2());