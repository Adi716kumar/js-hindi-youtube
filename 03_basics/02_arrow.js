const user = {
    username : "aditya",
    price : 999,

    welcomeMeessage : function(){
        console.log(`${this.username}, welcome to website`) //here this is current context reference
         console.log(this)

    }

}
 user.welcomeMeessage()
  user.username = "sam"
  user.welcomeMeessage()
// console.log(this) //this will print {} empty object but if we run same thing in browser it will so windows because its a global object

function chai(){
     let username = "hitesh"
     console.log(this.username);  //undefined
 }   
// Chai() // will not work because current context works only on objects

//arrow function
const chai2 = () =>{
    let username = "aditya"
    console.log(this)
}

// const addtwo = (num1,num2) => {
//     return (num1+num2)     //explicit return
// }
//using implicit return
const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(3,4))

