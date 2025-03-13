// arrays 
// const myArr = [8,5,'aditya','$',67];
// console.log(myArr);
//copy operation for array(all standard build in copy operations with any da object create shallow copies)in js create "shallow copies" not deep copies
//Shallow copies : point to the same underlying values as those of source object

//**************methods in arrays***************** *
// const arr2 = new Array('aditya','ota','ima','afa');
// console.log(arr2[2]);

// arr2.push('ina')
// arr2.pop();
// console.log(arr2);

// arr2.unshift('ota chennai')//push data in front
// arr2.shift(); // pop front element
// console.log(arr2)

// const newArr = arr2.join('-') //converts array elements in string having seperator
// console.log(newArr)
// console.log(typeof(newArr))

// //slice, splice

const myarr = [0,1,2,3,4,5]
console.log("A",myarr)

const myar1 = myarr.slice(1,3);  //slice--> do not modify original array
console.log("  ",myar1)  // return items from[1,3) 
console.log("B",myarr)

const myar2 = myarr.splice(1,3); // removes the given range from original array inclusively
console.log("  ",myar2);
console.log("C",myarr);





