/**
 * Below are the arrays and imports needed for the password generator.
 * The password generator combines random first names, last names, and numbers
 * to create unique passwords.
 */

console.log(firstNameArray);
console.log(lastNameArray);
console.log(LOTR.lotrCharactersArray);

import { firstNameArray } from './arrays/firstNameArray.js';
import { lastNameArray } from './arrays/lastNameArray.js';
import * as LOTR from './arrays/lotrArrays.js';
import * as Marvel from './arrays/marvelHeroesArrays.js';
import * as TF from './arrays/transformersArray.js';
import * as SW from './arrays/starWarsCharacters.js';

/**
 * Below are ideas for number usage in the password generator.
 * 1. Fixed Range Number: Generate a random number within a fixed range (e.g., 0-100) to append to the password.
 * 2. User-Defined Range: Allow users to input a range (e.g., 0-50) and generate a random number within that range.
 * 3. Custom Range Input: Let users specify a custom range by entering two numbers (e.g., 20-80) and generate a random number within that range.
 */

//1. Fixed Range Number
const randomNumber = Math.floor(Math.random() * 100);
//2. User-Defined Range
/*let number = prompt("Enter a range of numbers for an additional random number in your password (e.g., entering 50 will add a number between 0-49):");
if (number !== null && !isNaN(number) && Number(number) > 0) {
  randomNumber = Math.floor(Math.random() * Number(number));
}
//3. Custom Range Input
let numberRange = prompt("Enter two numbers separated by a comma to define a custom range for the additional random number in your password (e.g., entering 20,80 will add a number between 20-79):");
if (numberRange !== null) {
  const parts = numberRange.split(",");
}*/

const giftButton = document.getElementById("giftButton");

function generatePassword() {
  const randomFirstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)];
  const randomLastName = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];
  const randomLOTR = LOTR.lotrCharactersArray[Math.floor(Math.random() * LOTR.lotrCharactersArray.length)];
  const randomMarvel = Marvel.marvelArray[Math.floor(Math.random() * Marvel.marvelArray.length)];
  const randomTF = TF.transformers[Math.floor(Math.random() * TF.transformers.length)];
  const randomSW = SW.allStarWarsCharacters[Math.floor(Math.random() * SW.allStarWarsCharacters.length)];
  console.log('Your new password!', `${randomFirstName}${randomLastName}${randomNumber}`);
  return `${randomFirstName}${randomLastName}${randomNumber}${randomLOTR}${randomMarvel}${randomTF}${randomSW}`;
}

giftButton.addEventListener("click", () => {
  const password = generatePassword();
  alert(`Your new password! ${password}!`);
});

