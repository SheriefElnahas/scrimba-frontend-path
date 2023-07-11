// ************************************* DOM SELECTS ******************************
//Select the input and the button
const numberInput = document.querySelector('.unit-input');
const btn = document.querySelector('.convert-button');

const metersAndFeetEl = document.getElementById('meters-feet');
const litersAndGallonsEl = document.getElementById('liters-gallons');
const kilosAndPoundsEl = document.getElementById('kilos-pounds');


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
function metersAndFeet() {
    let num = numberInput.value;
    let p = `${num} meters = ${(num * 3.281).toFixed(3)} feet | ${num} feet = ${(num / 3.281).toFixed(3)} meters`;
    return p;
}

function litersAndGallons() {
    let num = numberInput.value;
    let p = `${num} liters = ${(num * 0.264).toFixed(3)} gallons | ${num} gallons = ${(num / 0.264).toFixed(3)} gallons`;
    return p;
}
function kilogramsAndPounds() {
    let num = numberInput.value;
    let p = `${num} kilos = ${(num * 2.204).toFixed(3)} pounds | ${num} pounds = ${(num / 2.204).toFixed(3)} kilos`;
    return p;
}

btn.addEventListener('click', () => {
      metersAndFeetEl.textContent = metersAndFeet();
      litersAndGallonsEl.textContent = litersAndGallons();
      kilosAndPoundsEl.textContent = kilogramsAndPounds();
})




