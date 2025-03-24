const myObject = {
    js : "javascript",
    cpp : "c++",
    rb  : "ruby"
}
//'for in loop ' for iteration in objects generally
for(const key in myObject){
    console.log(`${key} is the shortfrom of ${myObject[key]}`)
}

const arr = ['js','python','cpp']
for(const i in arr){
    console.log(i);  //this will print keys of array 0 1 2..not value, object are made by the inspiration of arrays having keys 0 1 2 3 .. but object have user defined keys
}

// for in loop is not used for maps also maps are not iteratable