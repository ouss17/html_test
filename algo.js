let str = "abra cad abra";

// console.log(str[1]);

for (const letter of str) {
  //   console.log(letter);
}

for (let i = 0; i < str.length; i++) {
  //   console.log(str[i].toUpperCase());
}

// const num = 8;
// console.log(num.toLowerCase()); //not a function car nb

// console.log(str.split(" "));

// ("AbraCadAbra");

// let splitStr = str.split(" ");
// for (let i = 0; i < splitStr.length; i++) {
//   //   console.log(splitStr[i]);
//   splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
//   newStr += splitStr[i];
// }
let newStr = "";
for (let el of str.split(" ")) {
  newStr += el.charAt(0).toUpperCase() + el.slice(1);
}
// console.log(newStr);

// function sliceLetter avec paramètre word, retourne le mot sans 1erre et derniere lettre

const sliceLetter = (word) => word.slice(1, word.length - 1);
// console.log(sliceLetter("papillon"));

let arr = [1, 5, 3, 8, 9, 5];
//9

const sumEvenNumbers = (arr) => {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 == 0) result += arr[index];
  }
  return result;
  //   return numbers.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue;
  //   }, 0);
};

// console.log(sumEvenNumbers(arr));

function squareDigits(num) {
  let outputString = "";
  let squaredDigit;
  console.log(num);
  console.log(num.length);
  for (let i = 0; i < num.length; i++) {
    console.log(`inside loop #${i}: `, squaredDigit, outputString);
    squaredDigit = num[i] ** 2;
    outputString += String(squaredDigit);
  }
  return Number(outputString);
}

console.log(squareDigits(9119));
console.log(squareDigits(765));
