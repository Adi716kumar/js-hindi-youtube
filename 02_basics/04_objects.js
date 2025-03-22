//objects singelton/constructor

const tinderUser = new Object(); //singleton object
// const tinderUser = {} non singelton object
tinderUser.id = "123abc"
tinderUser.name = "sam"
// console.log(tinderUser)

// nested object
const regularUser = {
    userName :{
        userFullName :{
            firstName : "aditya",
            middleName : "kumar",
            lastName : "srivastava",
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.userName)
// console.log(regularUser.userName.userFullName)
// console.log(regularUser.userName.userFullName.firstName)

//merging two objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
// const obj3 = Object.assign(obj1,obj2) //static method
const obj3 = {...obj1,...obj2}
// console.log(obj3);

//when data come from data base-->generally come in form of arrays and objects as element
// const user = [
//     {,,,},
//     {,,,,},
//     {,,,},


//important methods
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // return type will be array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));// create array having key and value in each seperate section

//suppose we are searching any value in object and that does not exist this acn lead system crash so we can as ask it..
// console.log(tinderUser.hasOwnProperty('id'));  //true
queueMicrotask


//destructring of object can also do with arrays
const course = {
    coursename : "js hindi",
    price : '999',
    courseInstructor : "hitesh"
}
const {courseInstructor : ci, coursename : cn} = course; // all the entities must be destructured within same braces in same line otherwise gives unknown resul ....  ci--> known as props..
// const {coursename : cn} = course;
console.log(ci);
console.log(cn);


//....APIs in javascript all the data in backened is in mainly in the form of jason earlier xml
// {
//     "name" : "aditya",
//     "class" : "btech"
// }


