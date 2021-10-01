import $ from 'jquery';
import 'slick-carousel';

$('.about__figure').slick({
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
    let actives = document.querySelectorAll('.modal-overlay.active, .modal.active');
    actives.forEach(active =>{
        active.classList.remove('active');
    });
}

modalBTNS.forEach( modalBTNS =>{
    modalBTNS.addEventListener('click', modalOpen)
});

modalCloser.addEventListener('click', modalClose);
modalModals.forEach( modal => {
    modal.addEventListener('click', e => {
        e.stopPropagation();
    });
});
modalOverlay.addEventListener('click', modalClose);

window.addEventListener('keydown', e => {
    if( e.key === 'Escape'){
        modalClose();
        mobileMenuClose();
    }
});

let tabLinks = document.querySelectorAll('.tabs__link');
function tabsToggle(e){
    e.preventDefault();
    let anchor = e.target.getAttribute('href');
    let goal = document.querySelector(anchor);

    let actives = document.querySelectorAll('.tabs__items.active, .tabs-content__section.active');
    actives.forEach( active => {
        active.classList.remove('active');
    });
    e.target.parentElement.classList.add('active');
    goal.classList.add('active');

}

tabLinks.forEach ( tabLink => {
    tabLink.addEventListener('click', tabsToggle);
});