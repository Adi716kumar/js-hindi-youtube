//for loop
for(let i=1;i<10;i++){
    // console.log(i)
}

//for of loop-->generally used in arrays and objects
const arr = [1,2,3,4,5,6]
for (const i of arr){
    // console.log(i);
}

//Maps-->stores unique key value while maintaining order
const map = new Map()
map.set('IN',"India")
map.set('USA','United States of America')
map.set("FR","France")
// console.log(map);
for(const [key,value] of map){
    // console.log(key,"--",value)
}
for(const i of map){
    // console.log(i)
}

//'for of' for object
const myObject = {// objects are not iterated through for of but by some different method
    'game1' : 'taken',
    'game' : 'gta'
}