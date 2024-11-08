console.log(`Working with lists`);

/* const belem = `Belém`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

to declare each item as a variable is not efficient. Make it an array */

// in JS lists are made as arrays!

const listCities = new Array (
    `Belém`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listCities);


// .PUSH ADDS ITEMS IN THE LIST
listCities.push(`Curitiba`) // to add an item in the list

console.log(listCities);

// .SPLICE REMOVES ITEMS FROM THE LIST
listCities.splice(1,1); 
// removes one element from position 1.

// NOTE: in JS there is a position 0.

console.log(listCities);

console.log(listCities[1]); // look for an item in discriminated position

console.log(listCities[1], listCities[0]);



