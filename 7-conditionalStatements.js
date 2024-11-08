console.log(`Conditional Statements:`);
console.log(`Buying flight tickets`)

const listCities = new Array(
    `Belém`,
    `São Paulo`,
    `Rio de Janeiro`
);

const majority = 18;
const accompanied = true;
const ticketFlight = false;

/*
if (majority >= 18) {

    console.log("Client at age of majority");
    console.log(listCities);

} else {
    // the person is minor age. Is she accompanied by an adult? 
    if (accompanied) { //
        console.log("Client is accompanied by an adult");
        console.log(listCities);
    } else {
        console.log("Client is not at age of majority and is not accompanied.");
    }
}*/

// Alternative, more clean and readable:

/*
if (majority >= 18) {

    console.log("Client at age of majority");
    console.log(listCities);

} else if (accompanied == true){
    // the person is minor age. Is she accompanied by an adult? 
        console.log("Client is accompanied by an adult");
        console.log(listCities);
    } else {
        console.log("Client is not at age of majority and is not accompanied.");
    } */

// Alternative to avoid repeated code:

if (majority >= 18 || accompanied == true) {
// pipe means "or" and removes unnecessary lines of code
    console.log("Client is either an adult or is accompanied by a legal guardian: Pick up a destiny!");
    console.log(listCities);
} else {
    console.log("Client is not at legal age, is neither accompanied: You are not allowed to board");
}


console.log("Onboarding verification: Do you habe a flight ticket?")

if(majority >= 18 && ticketFlight == true) {
    console.log("Have a nice trip!")
} else {
    console.log("You are not allowed to board!")
}
