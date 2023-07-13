const modalElement = document.querySelector('dialog');
const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');

openModalButton.addEventListener('click', () => {
  modalElement.showModal();
});

closeModalButton.addEventListener('click', () => {
  modalElement.close();
});

// Add Menu Item
const addButtons = document.querySelectorAll('.item__button');
const orderSection = document.querySelector('.order');

addButtons.forEach((addButton) => {
  addButton.addEventListener('click', (e) => {
    // Extract Order Name & Price
    const selectedItemName = e.target.previousElementSibling.children[0].textContent;
    const selectedItemPrice = e.target.previousElementSibling.children[2].textContent.slice(1);

    // Create An Order From The Selected Order Values
    createOrderItem(selectedItemName, selectedItemPrice);

    // Show Order Section Once We Create An Order
    orderSection.style.display = 'block';

    // Calculate Order Price Dynamically
    calculateTotalPrice();
  });
});

// Create An Order
const ordedrContainer = document.querySelector('.container--order');

function createOrderItem(orderName, orderPrice) {
  const orderItemDiv = `<div class="order__item">
                       <p class="order__name">${orderName}</p>
                       <button class="btn__remove">remove</button>
                       <p class="order__price">$${orderPrice}</p>
                    </div>`;

  ordedrContainer.innerHTML += orderItemDiv;
}

// Remove An Order
ordedrContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn__remove')) {
    // If there are no orders, then hide order section element
    if (e.target.parentElement.parentElement.children.length === 1) {
      orderSection.style.display = 'none';
    }
    // Remove the coressponding order when we click on remove button
    e.target.parentElement.remove();

    // Calculate The Price Again
    calculateTotalPrice();
  }
});

// Calculate Total Price
const totalPriceElement = document.querySelector('.total__price');

function calculateTotalPrice() {
  const itemsPrice = document.querySelectorAll('.order__price');
  let total = 0;

  itemsPrice.forEach((itemPrice) => {
    total += Number(itemPrice.textContent.slice(1));
  });

  totalPriceElement.textContent = `$${total}`;
}
