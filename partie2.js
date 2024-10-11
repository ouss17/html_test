"use strict";

import { calcAge } from "./modules/utils.js";

function greet(username) {
  console.log(`Hello ${username}`);
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
console.log(populations.length === 4);
let pourcentages = [];
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  pourcentages.push(percentage);
}
console.log(pourcentages);

console.log(calcAge(40));

///////////////////////////////

// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Fundamentals - Part2 #1</h1>`;

const calcAverage = (score1, score2, score3) => {
  let average = (score1 + score2 + score3) / 3;
  console.log(average);
  return (score1 + score2 + score3) / 3;
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas && avgDolphins > avgKoalas * 2) {
    console.log(`Les Dolphins ont gagné`);
  } else if (avgKoalas > avgDolphins && avgKoalas > avgDolphins * 2) {
    console.log(`Les Koalas ont gagné`);
  } else if (avgKoalas === avgDolphins) {
    console.log(`Les 2 équipes sont à égalité`);
  } else {
    console.log(`Aucune des 2 équipes n'a gagné`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
