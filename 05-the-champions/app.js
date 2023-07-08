// Firebase Imports
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue, set, update, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
  databaseURL: 'https://endorsements-132d8-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsInDB = ref(database, 'endorsements');

// Endorsement Form & Content
const endorsementForm = document.querySelector('form');
const endorsementMessage = document.querySelector('.card__textarea');
const endorsementFrom = document.querySelector('#from');
const endorsementTo = document.querySelector('#to');
const endorsementsContainerElement = document.querySelector('.endorsements__container');
const addEndoresmentBtn = document.querySelector('#add-endorestment-btn');

endorsementForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

addEndoresmentBtn.addEventListener('click', () => {
  // Extract Endorsement Values
  const endorsementMessageValue = endorsementMessage.value;
  const fromValue = endorsementFrom.value;
  const toValue = endorsementTo.value;

  // Create A New Endorsement Object
  const newendorsement = {
    endorsementMessage: endorsementMessageValue,
    from: fromValue,
    to: toValue,
  };

  // Push this Endorsement object to firebase
  push(endorsementsInDB, newendorsement);
  // Push a new endorsement to firebase

  // Clear the inputs
  endorsementMessage.value = endorsementFrom.value = endorsementTo.value = '';
});

onValue(endorsementsInDB, function (snapshot) {
  if (snapshot.exists()) {
    // Clear Endoremsent HTML Element
    endorsementsContainerElement.innerHTML = '';

    let itemsArray = Object.entries(snapshot.val());

    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];

      createAndAppendNewEndorsement(currentItemValue.endorsementMessage, currentItemValue.from, currentItemValue.to, currentItem);
      // updateEndorsement(currentItemID);
    }
  } else {
    endorsementsContainerElement.innerHTML = 'No items here... yet';
  }
});

function createAndAppendNewEndorsement(endorsementMessage, from, to, currentItem) {
  console.log(currentItem);

  let newEndorsementDiv = document.createElement('div');

  newEndorsementDiv.innerHTML = `
  <div class="endorsement">
  <div class="endorsement__header">
  <h3 class="endorsement__to">To ${to}</h3>
   <button class="endorsement__close">X</button>
  </div>


    <p class="endorsement__text">${endorsementMessage}</p>
    <div class="endorsement__footer">
      <h3 class="endorsement__from">From ${from}</h3>
      <div class="endorsement__likes">
        <p class="likes__icon">
          <button class="btn__heart">&hearts;</button> <span class="likes__like">0</span>
        </p>
      </div>
    </div>
  </div>
  `;

  newEndorsementDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('endorsement__close')) {
      let itemRef = ref(database, `endorsements/${currentItem[0]}`);

      // Challenge: Use the remove function to remove the item from the database
      remove(itemRef);
    }
  });

  endorsementsContainerElement.append(newEndorsementDiv);
}

// endorsementsContainerElement.addEventListener('click', (e) => {
//   if (e.target.classList.contains('btn__heart')) {
//     e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) + 1;
//   }

//   if (e.target.classList.contains('endorsement__close')) {
//     console.log('hello');
//   }
// });

// function updateEndorsement(endorestmentId) {
//   // Get a reference to the item you want to update
//   let itemRef = firebase.database().ref('shoppingList/' + itemID);

//   let endorestmentLocationInDB = ref(database, `endorsements/${endorestmentId}`);

//   endorestmentLocationInDB.update({
//     endorsementMessage: 'NO Way',
//   });
// }
