import { firstNameArray } from "./arrays/firstNameArray.js";
import { lastNameArray } from "./arrays/lastNameArray.js";  
import * as LOTR from './arrays/lotrCharacters.js';
import * as Marvel from './arrays/marvelHeroes.js';
import * as TF from './arrays/transformersArray.js';
import * as SW from './arrays/starWarsCharacters.js';

const randomNumber = Math.floor(Math.random() * 100);

let number = prompt("Enter a range of numbers for an additional random number in your password (e.g., entering 50 will add a number between 0-49):");
if (number !== null && !isNaN(number) && Number(number) > 0) {
  randomNumber = Math.floor(Math.random() * Number(number));
}

const giftButton = document.getElementById("giftButton");
function generatePassword() {
  const randomFirstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)];
  const randomLastName = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];
  console.log('Your new password!', `${randomFirstName}${randomLastName}${randomNumber}`);
  return `${randomFirstName}${randomLastName}${randomNumber}`;
}

giftButton.addEventListener("click", () => {
  alert(`Your new password! ${randomFirstName}${randomLastName}${randomNumber}!`);
});

const randomFirstName = firstNameArray[Math.floor(Math.random() * firstNameArray.length)];
console.log("Selected random first name:", randomFirstName);
const randomLastName = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];
console.log("Selected random last name:", randomLastName);

console.log('Your new password!', `${randomFirstName}${randomLastName}${randomNumber}`);
