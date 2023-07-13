const modal = document.querySelector('dialog');
const openModalButton = document.querySelector('#open-modal');
const closeModalButton = document.querySelector('#close-modal');

openModalButton.addEventListener('click', () => {
  // modal.show();
  modal.showModal();
})

closeModalButton.addEventListener('click', () => {
  modal.close(); 
})
