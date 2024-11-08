console.log(`Buying flight tickets`)

const listCities = new Array(
    `Belém`,
    `São Paulo`,
    `Salvador`
);

const majority = 18;
const accompanied = false;
const destinyCity = `Belém`;

const allowenceToBuy = majority >= 18 || accompanied == true;

let counter = 0;
let cityExists = false;

while (counter < 3) {

    if (listCities[counter] == destinyCity) { 
        cityExists = true;
        break;
    }

    counter += 1;
}

console.log("Final destination:", cityExists);

if (allowenceToBuy && cityExists) {
    console.log("Have a nice trip!");
} else {
    console.log("Error!");
}


// Instead of WHILE loop, using FOR loop

for (let i = 0 ; i < 3 ; i++) {
// for (let counter = 0 ; counter < 3 ; counter++) {
    if(listCities[i] == destinyCity){
        cityExists = true;
        //break;
    }
}