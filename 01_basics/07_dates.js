//Dates
let myDate = new Date()
console.log(myDate); // 2025-03-13T10:06:18.277Z
console.log(myDate.toString()); // 2025-03-13T10:02:14.717Z
console.log(myDate.toDateString()) // Thu Mar 13 2025
console.log(myDate.toISOString())  // 2025-03-13T10:06:18.277Z
console.log(myDate.toLocaleDateString()) //  3/13/2025
console.log(myDate.toTimeString())  // 10:06:18 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date("2023-12-08"); //  YY/MM/DD
let myCreatedDate = new Date(2025, 0, 31)  // yy/mm/dd
console.log(myCreatedDate)

//to compare two dates we need to convert them into millisecond
let timeStamp = Date.now();
// to convert date into second divide it by 1000..   Date.now()/1000

console.log(timeStamp);
console.log(myCreatedDate.getTime());  // date is a object we are using getTime() method to convert it into seconds so that we can compare
console.log(timeStamp == myCreatedDate.getTime());

//some important methods are also there to find only specific inf of date like .. day time months second etc.
console.log(myDate.getMonth());