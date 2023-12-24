
import inquirer from "inquirer";

const answers: {
    numberOne: number;
    numberTwo: number;
    Operator: string;
} = await inquirer.prompt([

   

    {
        type: "number",
        name: "numberOne",
        message: "Please Select your first number:"
    },

        {
        type: "number",
        name: "numberTwo",
        message: "Now, Select your second number:"
    },
   
    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/", "%"],
        message: "Please Select your operator:"
    }
]);


const { numberOne, numberTwo, Operator } = answers;

if (numberOne !== undefined && numberTwo !== undefined && Operator) {
    let result: number = 0;

   

    if (Operator === "+") {
        result = numberOne + numberTwo;
    } else if (Operator === "-") {
        result = numberOne - numberTwo;
    } else if (Operator === "*") {
        result = numberOne * numberTwo;
    } else if (Operator === "/") {
        result = numberOne / numberTwo;
    } else if (Operator === "%") {
        
        result = (numberOne / numberTwo) * 100;
     }

    console.log("Great! Your result is:", result);
} else {

    // Notify the user if they provided invalid input

    console.log("Please enter valid numbers and choose an operation.");
}


















