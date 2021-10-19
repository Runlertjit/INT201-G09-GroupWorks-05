import {calService, calTax, calTotal, outer, rip} from './closureassign.js'

console.log(calTotal(100,calTax,calService));
let showName = outer(); 
showName();
console.log(rip('poom','tus','tee','mick'));