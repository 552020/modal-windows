'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// the querySelectorAll selected all the elements that behave like an array and therefore we can use the index.
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent); // since there is only one line of code we can also avoid the curly braces.
// }

// document.querySelectorAll('.show-modal')[0].textContent = 'Hallo!';
// btnsOpenModal[0].textContent;
// btnsOpenModal[1].textContent;
// btnsOpenModal[2].textContent;

// Instead of reading the textContnt proporty we will call the addEventListener method.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // modal.style.display = 'block'; // cause the actual value is display: none
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// close the modal window clicking on the close button on the window
btnCloseModal.addEventListener('click', closeModal);

// close the modal window clicking on the overlay outside the modal window
overlay.addEventListener('click', closeModal);

// LECTURE 81

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
