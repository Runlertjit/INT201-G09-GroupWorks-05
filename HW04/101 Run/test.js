
import {calMedAve,getMenu} from "./function.js";

// Higher Order Function
let average = calMedAve('average',4,5,6,2,3); // Case 1
console.log(average)
let median = calMedAve('median',4,5,6,2,3); // Case 2
console.log(median)
let error = calMedAve(4,5,6,2,3); // Case 3
console.log(error)

// Closure function
let getMenufn = getMenu(
    {name : 'Pizza' , price : 200},
    {name : 'Hamberger' , price : 120},
    {name : 'Noodle' , price : 50},
    {name : 'Spaghetti' , price : 150},
    {name : 'Coffee' , price : 70})

console.log(getMenufn('Coffee')) // Case 1
console.log(getMenufn('noodle')); // Case 2
console.log(getMenufn('PIZZA')); // Case 3
console.log(getMenufn('Rice')); // Case 4
