// ************************************ Selections Start  ************************************
// Select Password Range Element & Generate Buttons & The Password Input
const numberInput = document.querySelector('input[type="number"]');
const btn = document.querySelector('button');
const firstPasswordInput = document.querySelector('.input-container input:nth-child(1)');
const secondPasswrodInput = document.querySelector('.input-container input:nth-child(2)');

// Select checkbox elements
let lettersEl = document.querySelector('input[value="letters-element"]');
let symbolsEl = document.querySelector('input[value="symbols-element"]');
let numbersEl = document.querySelector('input[value="numbers-element"]');
// ************************************ Selections End ************************************

// Arrays Needed
const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>', '.', '?', '/'];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let finalArr = [];

let password = '';

// ************************************ Helper Functions Start ************************************

// Dynamic Alert Text
function showAlertText(alertMessage) {
  const alertText = document.querySelector('.alert__text');

  alertText.textContent = alertMessage;

  if (!lettersEl.checked && !symbolsEl.checked && !numbersEl.checked) {
    alertText.style.visibility = 'visible';
  } else {
    alertText.style.visibility = 'hidden';
  }
}

// Build The Final Array That we will use to generate the password
function filterConditions() {
  // Show alert text if the user didn't select any field
  showAlertText('Please Select Any Field!');

  if (lettersEl.checked) {
    finalArr = finalArr.concat(letters);
  }
  if (symbolsEl.checked) {
    finalArr = finalArr.concat(symbols);
  }
  if (numbersEl.checked) {
    finalArr = finalArr.concat(numbers);
  }
}

// Build the password based on the final array
function generateRandomPassword(arr, length) {
  let password = '';
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * arr.length);
    password += arr[random];
  }
  return password;
}
// ************************************ Helper Functions End ************************************

// ************************************ Show Alert Text Start  ************************************

// ************************************ Show Alert Text End  ************************************

btn.addEventListener('click', () => {
  // Figure out the conditions by calling filter condition function
  filterConditions();

  // Check to see if the users has chosen any checkbox or not
  if (finalArr.length != 0) {
    //Fill the password field with the random generator password.
    firstPasswordInput.value = generateRandomPassword(finalArr, numberInput.value);
    secondPasswrodInput.value = generateRandomPassword(finalArr, numberInput.value);
  }
});
