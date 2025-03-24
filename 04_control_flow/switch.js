//syntax
// switch(key){
//     case value:

//     break;

//     default:
//         break;
// }
//calculatore implementation
// 1-->+
// 2-->-
// 3-->/
// 4-->*
switch(key){
    case 1: // if string then case :"add"
        console.log('addition')
        break; // if break is not present then all cases will run except default

    case 2:
        console.log("subtraction")
        break;

    //so on
    default:
        console.log("enter valid number")
}
