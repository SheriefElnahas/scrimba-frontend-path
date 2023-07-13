const modal = document.querySelector('dialog');
const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');

openModalButton.addEventListener('click', () => {
  // modal.show();
  modal.showModal();
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});

// Add Menu Item
const addButtons = document.querySelectorAll('.item__button');
const ordedrContainer = document.querySelector('.container--order');
const orderSection = document.querySelector('.order');
const totalPriceElement = document.querySelector('.total__price');

addButtons.forEach((addButton) => {
  addButton.addEventListener('click', (e) => {
    const selectedItemName = e.target.previousElementSibling.children[0].textContent;
    const selectedItemPrice = e.target.previousElementSibling.children[2].textContent.slice(1);

    createOrderItem(selectedItemName, selectedItemPrice);

    orderSection.style.display = 'block';

    calculateTotalPrice();
  });
});

function createOrderItem(orderName, orderPrice) {
  const orderDiv = `<div class="order__item">
             <p class="order__name">${orderName}</p>
             <button class="order__button">remove</button>
             <p class="order__price">$${orderPrice}</p>
           </div>`;
  ordedrContainer.innerHTML += orderDiv;
}

function calculateTotalPrice() {
  // Get All Items Price
  let total = 0;
  const itemsPrice = document.querySelectorAll('.order__price');
  itemsPrice.forEach((itemPrice) => {
    total += Number(itemPrice.textContent.slice(1));
  });

  totalPriceElement.textContent = `$${total}`;
}
