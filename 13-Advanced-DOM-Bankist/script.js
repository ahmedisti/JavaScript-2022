'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

//======== button scrolling ========\\

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

//page navigation\\

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// same thing using event delegation
// 1. add event listener to common parent element
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  // matching strategy

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed component \\

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  //guard clause
  if (!clicked) return;

  //remove active classes for both tab and content
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(con =>
    con.classList.remove('operations__content--active')
  );

  //active tab
  clicked.classList.add('operations__tab--active');

  // active content area
  // console.log(clicked.dataset.tab);

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fade animation\\
//using the deligation

const handleHoverFade = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//passing "argument" into handler
nav.addEventListener('mouseover', handleHoverFade.bind(0.5));
nav.addEventListener('mouseout', handleHoverFade.bind(1));

// stciky navigation
//one way
//but fire the event each time on the scrolling
//bad performance
// const initialcoord = section1.getBoundingClientRect()
// window.addEventListener('scroll',function(){
//   console.log(window.scrollY);

//   if(window.scrollY > initialcoord.top) {
//     nav.classList.add('sticky')
//   }
//   else{
//     nav.classList.remove('sticky')
//   }

// })

//stciky navigation: intersection Observer API
//best way
// const observerCallback = function(entries,observer){
// entries.forEach(entry => {
//   console.log(entry);
// })
// }
// const observerOption = {
//   root: null,
//   threshold:[0,0.2],
// };
// const observer =  new IntersectionObserver(observerCallback,observerOption);
// observer.observe(section1)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//reveal section
const allSec = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSec.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// LAZY LOADING IMAGES \\

// const imageTarget = document.querySelectorAll('img[data-src]');

// console.log(imageTarget);

// const loadImg = function (entries, observer) {
//   const entry = entries;

//   if (!entry.isIntersecting) return;

//   //replace the src with data-src

//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');

//   });

//   observer.unobserve(entry.target);
// };

// const imageObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
// });

// imageTarget.forEach(img => imageObserver.observe(img));

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// slider component

const slider = function () {
  let curSlide = 0;

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const maxSlide = slides.length - 1;
  const dotContainer = document.querySelector('.dots');

  //Function
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //next slide

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDots(curSlide);
  };

  //prev slide

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDots(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activeDots(0);
  };
  init();

  //EVENT HANDLERS
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
    //done short curciting
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDots(slide);
    }
  });
};
slider();

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
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

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('Link', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation(); // to stop the bubbling and capturing
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('Links', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('Nav Link', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

//======== DOM Traversing ========\\

// const h1 =  document.querySelector('h1');

// //going downward: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);

// console.log(h1.firstElementChild.style.color = 'white');
// console.log(h1.lastElementChild.style.color = 'white');

// //going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// console.log(h1.closest('.header'));

// //sideways : siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// });


//======= LIFECYCLE DOM EVENTS ========\\

// document.addEventListener('DOMContentLoaded', function(e){
//   console.log('hello',e);
// });

// window.addEventListener('load',function(e){
//   console.log('page loaded',e);
// });

// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
