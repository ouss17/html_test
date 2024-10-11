"use strict";

// Initialisation de la variable firstName
// let firstName = "Ous";
// let age = 26;

// Réattribution d'une nouvelle valeur à la variable firstName
// firstName = "Ousmane";
// console.log(firstName);

///////////////////////////// PRATIQUE 1 LOG //////////////////////////////
const country = "Malaisie";
const continent = "Asia";
let population = 33;

// console.log(
//   "Mon pays " +
//     country +
//     " se situe en " +
//     continent +
//     " et possède une population de " +
//     population +
//     "M de personnes"
// );

///////////////////////// PRATIQUE 2 DATA TYPE ///////////////////////////////////

let isIsland = false;
let language;

// console.log(typeof isIsland); //boolean
// console.log(typeof language); //undefined

const num = 8;

///////////////////////// PRATIQUE 3 REATRIBUTION ET CONST //////////

language = "créole";

const now = 2024;
// console.log(now - 200);
// console.log(3 ** 3); //puissance

let x = 10 + 5;
let y = 30;
x += 5;
x++;
x--;

// console.log(x >= y);

////////////////////////// PRATIQUE 4 //////////////////////

// console.log(
//   "Si la population était divisée par 2, il resterait " +
//     population / 2 +
//     "M de personnes"
// );

// console.log(population++);

// console.log(population > 6 ? "oui" : "non");

// console.log(population > 33 ? "oui" : "non");

//////////////////////// PRATIQUE 5 /////////////////////

const description = `La ${country} est en ${continent}, et ses ${
  population + 10
} millions d’habitants parlent le ${language}.`;
// console.log(description);

/////////////////////////// CONDITIONS /////////////////////

// if (population > 33) {
//   console.log(`La population de la ${country} est plus grande que la moyenne`);
// } else if (population < 33) {
//   console.log(
//     `La population de la ${country} est ${
//       33 - population
//     } en dessous de la moyenne`
//   );
// } else {
//    console.log(`La population de la ${country} est moyenne`);
// }

// population > 33
//   ? console.log(`La population de la ${country} est plus grande que la moyenne`)
//   : population < 33
//   ? console.log(
//       `La population de la ${country} est ${
//         33 - population
//       } en dessous de la moyenne`
//     )
//   : console.log(`La population de la ${country} est moyenne`);

// console.log(Boolean({}));

//////////////////////CONVERSION///////////////////////

// let numNeighbours = Number(prompt("Combien de pays frontaliers a votre pays"));
// if (numNeighbours === 1) {
//   console.log("Il y a un seul pays frontalier!");
// } else if (numNeighbours > 1) {
//   console.log("Il y a plusieurs pays frontalier!");
// } else {
//   console.log("Pas de frontières");
// }

///////////////////OR AND////////////////////////

// if (language == "english" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country}`);
// } else {
//   console.log(`${country} does not meet your criteria`);
// }

///////////////////// SWITCH ////////////////////////

// switch (language) {
//   case "chinese":
//     console.log(`MOST number of native speakers!`);
//     break;
//   case "spanish":
//     console.log(`2nd place in number of native speakers`);
//     break;
//   case "english":
//     console.log(`3rd place`);
//     break;
//   case "hindi":
//     console.log(`Number 4`);
//     break;
//   case "arabic":
//     console.log(`5th most spoken language`);
//     break;

//   default:
//     console.log(`Great language too :D`);
//     break;
// }

////////////////////// TERNAIRE ////////////////

// population = 130;

// console.log(
//   `${country}'s population is ${
//     population > 33 ? "above " : population < 33 ? "below " : ""
//   }average`
// );
