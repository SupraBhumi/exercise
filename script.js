// const prompt = require('prompt-sync')();

// var answer = prompt("Enter number 1-10 : ");


// if(answer < 0){
//     console.log("Your number is < 0 : ", 0);

// }
// else if(answer <= 10){
//     console.log("Your number is < 10, your number is : ", answer);
    
// }

// else{

//     console.log("Your number is > 10 : ", answer**2);

// }


// const secretFormula = (num) => {
//     console.log(`i funktionen: ${num}`);
//     return num;
// };

// console.log(secretFormula(1));



const secretFormula = (num) => {
   if (num<0){
   return 0;
   }
   else if (num>10){
    return num *num;
   }
   return num;
};

console.log("-3 ger : " + secretFormula(-3));
console.log("0 ger : " + secretFormula(0));
console.log("3 ger : " + secretFormula(3));
console.log("10 ger : " + secretFormula(10));
console.log("11 ger : " + secretFormula(11));






