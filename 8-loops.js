console.log(`\nLoops:\n`);
console.log(`Buying flight tickets`)

const listCities = new Array(
    `Belém`,
    `São Paulo`,
    `Rio de Janeiro`
);

const majority = 18;
const accompanied = false;
let ticketFlight = false; // became "let" to be modified later in the code
const destinyCity = `Rio de Janeiro`;

/* Making all the following code into a variable:

if (majority >= 18 || accompanied == true) {
// pipe means "or" and removes unnecessary lines of code
    console.log("Client is either an adult or is accompanied by a legal guardian: Pick up a destiny!");
    console.log(listCities);
    ticketFlight = true;
} else {
    console.log("Client is not at legal age, is neither accompanied: You are not allowed to board");
    ticketFlight = false;
}
*/

const allowenceToBuy = majority >= 18 || accompanied == true;

// Checking items in the list
let counter = 0;
while (counter < 3) {
    // brackets search for a specific position within a list.
    /* in this case, instead of providing the exact index, the counter 
    will iterate through the list to find the desired item */

    if (listCities[counter] == destinyCity) { 
        // without == destinyCity it doesn't stop to iterate
        console.log("Destiny found!");
    } else {
        console.log("Destiny doesn't exist");
    }
    counter += 1;
}

/*
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
in the for lopp, the value starts at 0, iterates 5 times 
and every time increases by 1, then the statement is executed.
*/