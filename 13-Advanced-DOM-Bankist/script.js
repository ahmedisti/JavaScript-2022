'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//======== selecting, creating, deleting ========\\

// //selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSec = document.querySelectorAll('.section');
// console.log(allSec);

// document.getElementById('section-1');
// const allBtn =  document.getElementsByTagName('button');

// console.log(allBtn);

// console.log( document.getElementsByClassName('btn'));

// // creating and inserting elements
// // .insertAdjacentHTML

// const message =  document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality';

// message.innerHTML = 'We use cookies for improved functionality <button class = "btn btn-close-cookie">Got It!</button>';

// // header.prepend(message); // prepend here add the first child of the element

// header.append(message); // apend make the last child of the element

// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// //delete element

// document.querySelector('.btn-close-cookie').addEventListener('click',function(){
//   message.remove(); // new way
//   message.parentElement.removeChild(message); // old way
// })


// //======== style attributs and classes ========\\

// // styles
// // added in inline css
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =Number.parseFloat (getComputedStyle(message).height,10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered')


// //attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// logo.alt = 'Istiaq Ahmed';
// console.log(logo.className);

// logo.setAttribute('company', 'Bank Sheba' );


// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));


// // data attributes

// console.log(logo.dataset.versionNumber);


// // classes

// logo.classList.add('c','j');
// logo.classList.remove('c','j');
// logo.classList.toggle('c');
// logo.classList.contains('c');  // not include

// // Do not use overwrite the existing classes
// logo.className = 'Isti';