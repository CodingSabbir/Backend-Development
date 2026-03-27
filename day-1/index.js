const {addToCart,fullName} = require("./cartModule");

console.log('welcome to BD')
let number=[10,20,30,40,50,60]
number.forEach((value,number) => {
    console.log(value,number)
});


console.log(addToCart())
console.log(fullName())