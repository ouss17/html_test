"use strict";

import { calcAge } from "./modules/utils.js";

function greet(username) {
  // console.log(`Hello ${username}`);
}
// greet("Tom");
// greet("Erik");
// greet("Jack");

// function sum(a = 0, b = 0) {
//   console.log(a + b);
// }
function sum(a, b) {
  if (!a || !b) {
    console.log("Entre des paramètres !");
    return;
  }
  //type narrowing
  if (typeof a !== "number" || typeof b !== "number") {
    result = Number(a) + Number(b);
  } else {
    result = a + b;
  }
  return result;
}
// console.log(sum(3, 4));

///////////////////// FUNCTIONS /////////////////
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} millions people and its capital city is ${capitalCity}`;
}

// console.log(describeCountry("Finland", 6, "Helsinki"));
// console.log(describeCountry("France", 60, "Paris"));
// console.log(describeCountry("Espagne", 40, "Madrid"));

////////////////// VAR FUNCTION /////////////////////

function percentageOfWorld1(population) {
  let percentage = (population / 7900) * 100;
  return percentage;
}

function percentageOfWorld2(population) {
  let percentage = (population / 7900) * 100;
  return percentage;
}

const percentageOfWorld3 = (population) => {
  let percentage = (population / 7900) * 100;
  return percentage;
};

const percentageFrance = percentageOfWorld3(60);
const percentageOfMalaisia = percentageOfWorld3(33);
const percentageOfSpain = percentageOfWorld3(40);
// console.log(percentageFrance, percentageOfMalaisia, percentageOfSpain);

////////////////FUNCTION CALLING FUNCTION/////////////////

/**
 *
 * @param {String} country
 * @param {Number} population
 * @returns
 */
const describePopulation = (country, population) => {
  return `${country} has ${population} million people, so it's about ${percentageOfWorld1(
    population
  )}% of the world population.`;
};

// console.log(describePopulation("China", 1441));
// console.log(describePopulation("Malaisie", 33));
// console.log(describePopulation("France", 60));

/////////////////ARRAYS////////////////////

let populations = [30, 60, 40, 14];
// console.log(populations.length === 4);
let pourcentages = [];
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  pourcentages.push(percentage);
}
// console.log(pourcentages);

// console.log(calcAge(40));

//////////////CALCUL ARRAYS/////////////////

let neighbours = ["China", "Mongolia", "Kazakhstan"];

neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany"))
  // console.log("Probably not a central European Country :D");

  neighbours[neighbours.indexOf("Mongolia")] = "Suède";
// console.log(neighbours);

////////////////////OBJECT////////////////////////

const myCountry = {
  country: "France",
  capital: "Paris",
  language: "french",
  population: 60,
  neighbour: ["Spain", "Belgium", "Italia"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbour.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    neighbours.length > 0 ? (this.isIsland = false) : (this.isIsland = true);
  },
};
myCountry.population += 2;
myCountry["population"] -= 2;
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbour.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

///////////////////FUNC IN OBJECT//////////////////

const hedi = {
  firstName: "Hedi",
  lastName: "Rivas",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  bestFriend: "Michael",
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he ${
      !this.hasDriversLicence ? "doesn't have" : "has"
    } a driver's licence.`;
  },
};

// console.log(hedi.getSummary());
myCountry.checkIsland();
// console.log(myCountry);

//////////////////////// FOR ///////////////////////////

// for (let i = 1; i <= 50; i++) {
//   console.log(`number ${i} is currently voting`);
// }

/////////////////// LOOPING ARRAY //////////////////

// let populations = [30, 60, 40, 14];
let pourcentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  pourcentages2.push(percentage);
}

// console.log(pourcentages2);

////////////////// LOOPING BACKWARD /////////////////

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    // console.log(`Neighbour : ${listOfNeighbours[i][j]}`);
  }
}

/////////////////// WHILE LOOP ///////////////////

let percentage3 = [];
let indexWhile = 0;
while (indexWhile < populations.length) {
  const percentage = percentageOfWorld1(populations[indexWhile]);
  percentage3.push(percentage);
  indexWhile++;
}

// console.log(percentage3);
