const prompt = require('prompt-sync')();

var answer = prompt("Enter number 1-10 : ");


if(answer < 0){
    console.log("Your number is < 0 : ", 0);

}
else if(answer <= 10){
    console.log("Your number is < 10, your number is : ", answer);
    
}

else{

    console.log("Your number is > 10 : ", answer**2);

}


