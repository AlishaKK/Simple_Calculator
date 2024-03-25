#! /usr/bin/env node

import inquirer from "inquirer";

//Priniting welcome Message
console.log("\n\tWelcome To \'CodeWithAlisha\' -CLI simple Calculator \n")
// Asking Question from users through Inquirerr

 let answer = await inquirer.prompt([
    {message: "Enter First Number ", type: "number", name:"firstNumber"},
    {message: "Enter Second Number ", type: "number", name:"secondNumber"},
    {
        message: "Select one  Operator ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }

// There is issue with your node I think that, we have to reinstall it.ok
 ]);
 //conditinal statement if-else 
if(answer.operator === "Addition"){
   console.log(answer.firstNumber + answer.secondNumber)
}
 else if(answer.operator === "Subtraction"){
   console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.operator === "Multiplication"){
   console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.operator === "Division"){
   console.log(answer.firstNumber / answer.secondNumber)
}
else{
   console.log("Invalid input");
}