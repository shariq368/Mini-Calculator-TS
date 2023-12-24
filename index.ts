import inquirer from 'inquirer';

async function main() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "number",
        name: "numberone",
        message: "Please Enter your First number",
      },
      {
        type: "number",
        name: "numbertwo",
        message: "Please Enter your Second number",
      },
      {
        type: "list",
        name: "operator",
        choices: [
          "addition(+)",
          "subtraction(-)",
          "multiplication(*)",
          "division(/)",
        ],
        message: "Please Select your operator:",
      },
    ]);

    const { numberone, numbertwo, operator } = answers;

    if (numberone && numbertwo && operator) {
      let result = 0; // No need for type annotation in JavaScript

      switch (operator) { // Using switch for cleaner operator handling
        case "addition(+)":
          result = numberone + numbertwo;
          break;
        case "subtraction(-)":
          result = numberone - numbertwo;
          break;
        case "multiplication(*)":
          result = numberone * numbertwo;
          break;
        case "division(/)":
          result = numberone / numbertwo;
          break;
        default:
          console.log("Please Select a valid operator");
      }

      console.log("Your answer is", result);
    } else {
      console.log("Please enter all required values");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();

















