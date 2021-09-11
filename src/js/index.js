console.log('Hello, world!');
let btnc = document.querySelector('.banner__btn_colored');
let formc = document.querySelectorAll('div.modal-overlay, div.modal, div.modal-form');
btnc.addEventListener('click', function(e){
    formc.classList.add('active');
});

let btnt = document.querySelector('.banner__btn_transparent');
let formt = document.querySelector('.modal-overlay');
btnt.addEventListener('click', function(e){
    formt.classList.add('active');
});

// document.getElement('banner__btn_colored').addEventListener('click', () => {
//     document.querySelector('modal-form').classList.toggle('is-active');
  
//   });
