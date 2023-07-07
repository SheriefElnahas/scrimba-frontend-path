// Firebase Imports
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

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
const endorsementsContainerElement = document.querySelector('.endorsements');
const addEndoresmentBtn = document.querySelector('#add-endorestment-btn');

endorsementForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

// const endorsementArray = [];
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

  // endorsementArray.push(newendorsement);

  // Clear the inputs
  endorsementMessage.value = endorsementFrom.value = endorsementTo.value = '';

  // Create A New Endorsement and add it to the HTML
  endorsementsContainerElement.innerHTML += createNewEndorsement(endorsementMessageValue, fromValue, toValue);
});

function createNewEndorsement(endorsementMessage, from, to) {
  return `
  <div class="endorsement">
    <h3 class="endorsement__to">To ${to}</h3>
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
}
