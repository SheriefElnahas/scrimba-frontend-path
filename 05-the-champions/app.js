const endorsementMessage = document.querySelector('.card__textarea');
const endorsementFrom = document.querySelector('#from');
const endorsementTo = document.querySelector('#to');
const form = document.querySelector('form');
const cardBtn = document.querySelector('.card__btn');
const endorsementsElement = document.querySelector('.endorsements');

const endorsementArray = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

cardBtn.addEventListener('click', () => {
  const endorsementMessageValue = endorsementMessage.value;
  const fromValue = endorsementFrom.value;
  const toValue = endorsementTo.value;

  const newendorsement = {
    endorsementMessage: endorsementMessageValue,
    from: fromValue,
    to: toValue,
  };
  endorsementArray.push(newendorsement);

  endorsementMessage.value = endorsementFrom.value = endorsementTo.value = '';

  endorsementsElement.innerHTML += createNewEndorsement(endorsementMessageValue, fromValue, toValue);
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
