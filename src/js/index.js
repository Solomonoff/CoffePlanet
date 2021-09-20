import $ from 'jquery';
import 'slick-carousel';

$('.article-slider__slide').slick({
    autoplay: true,
    autoplaySpeed:5000,
    prevArrow: '.article-slider__btn_prev',
    nextArrow: '.article-slider__btn_next',
});

let mobileBtn = document.querySelector('.btn-mobile');
let headerNav = document.querySelector('.main-header__nav');
function mobileMenuOpen(){
    mobileBtn.classList.add('is-open');
    headerNav.classList.add('is-open'); 
}

function mobileMenuClose(){
    mobileBtn.classList.remove('is-open');
    headerNav.classList.remove('is-open');
}

mobileBtn.addEventListener('click',function(e){
    if(mobileBtn.classList.contains('is-open')){
        mobileMenuClose();
    } else{
        mobileMenuOpen();
    }
});

headerNav.addEventListener('click', e => {
    if(headerNav.classList.contains('is-open')){
        mobileMenuClose();
    }
});

let modalBTNS = document.querySelectorAll('.btn-modal');
let modalOverlay = document.querySelector('.modal-overlay');
let modalModals = document.querySelectorAll('.modal');
let modalCloser = document.querySelector('.modal-overlay__close');

function modalOpen(e){
    e.preventDefault();
    let anchor = e.target.getAttribute('data-href');
    let goal = document.querySelector(anchor);

    modalOverlay.classList.add('active');
    goal.classList.add('active');
}

function modalClose(){
    let actives = document.querySelectorAll('modal-overlay.active, modal.active');
    actives.forEach(active =>{
        active.classList.remove('active');
    });
}

modalBTNS.forEach( modalBTNS =>{
    modalBTNS.addEventListener('click', modalOpen)
});

modalCloser.addEventListener('click', modalClose);

modalOverlay.addEventListener('click', modalClose);

// console.log('Hello, world!');
// let btnc = document.querySelector('.banner__btn_colored');
// let formc = document.querySelectorAll('div.modal-overlay, div.modal, div.modal-form');
// btnc.addEventListener('click', function(e){
//     formc.classList.add('active');
// });

// let btnt = document.querySelector('.banner__btn_transparent');
// let formt = document.querySelector('.modal-overlay');
// btnt.addEventListener('click', function(e){
//     formt.classList.add('active');
// });

// document.getElement('banner__btn_colored').addEventListener('click', () => {
//     document.querySelector('modal-form').classList.toggle('is-active');
  
//   });
