console.log("Assign variables");

const age = 35;
const firstName = "Luciana";
const lastname = "Imbiriba";

console.log(firstName + lastname);
console.log(firstName + " " + lastname);
console.log(firstName,lastname); // prints the arguments separately

console.log(`my name is ${firstName} ${lastname}`); //concatenates variables

firstName = firstName + lastname;
// const assigns as constant variable and doens't allow to be reassigned.

/*
let firstName = "Luciana"
firstName = firstName + lastname

assigning variables as "let" allows to change the value and variable type

ASSIGN VARIBALES AS CONST, DESPITE EXCEPTIONS, IS USUALLY A GOOD PRACTICE!
and assign the variable with the most understanable term.
*/
