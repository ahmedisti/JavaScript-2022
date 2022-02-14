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

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

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

//======== smooth scrolling ========\\

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);

  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (x/y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(
  //   s1coord.left + window.pageXOffset,s1coord.top + window.pageYOffset
  //   );

  // old way support in old browser
  // window.scrollTo({
  //  left: s1coord.left + window.pageXOffset,
  //  top: s1coord.top + window.pageYOffset,
  //  behavior: 'smooth',
  // });

  //morder way support in morder browser

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//======== Type of event and event handlers ========\\

// //mordern way
// const h1 = document.querySelector('h1');

// const alertH1 = function(e){

//   alert('addEventListener: Great! You are reading the heading :D');
//   // h1.removeEventListener('mouseenter',alertH1); // only repeat the event one time
//   setTimeout(() => h1.removeEventListener('mouseenter',alertH1),3000)
// }

// h1.addEventListener('mouseenter',alertH1);

// //alternative way old way
// // h1.onmouseenter = function(e){

// //   alert('onmouseenter: Great! You are reading the heading :D')
// // };

//======== Event propagation Bubbling and Capturing ========\\

// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('Link', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
  // e.stopPropagation(); // to stop the bubbling and capturing
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('Links', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('Nav Link', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});
