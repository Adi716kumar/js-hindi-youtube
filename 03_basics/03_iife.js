//Immediately Invoked Function Expression(iife)---> use to avoid the pollution caused by global scope variables
//we also use iife to immedietly envoke function as soon as program executes


//named iife
(
    function chai(){
        console.log("DB coonect");
    }
)
();//function calling  //here semi colon is used to revoke iife function
// chai() //calling this way will give error

//unnamed iife
(() =>{
    console.log("DB coonect two");
})
();//function calling

//using parameters and arguments
((name) =>{
    console.log(`My name is ${name}`)
})
('aditya');

