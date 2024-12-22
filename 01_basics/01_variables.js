const accountId = 2301641540013
let accountEmail = "aditya716@google.com"
var accountPassward = "12345"
accountCity = "Kanpur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ad@ad.com"
accountPassward = "121233"
accountCity = "Chicago"

console.log(accountId);
/*
Prefer not to use var because of issue in block scope and function scope
*/
console.table([accountEmail,accountPassward,accountCity,accountState])