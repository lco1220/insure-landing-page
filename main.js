let mobile_btn = document.getElementById('mobile__btn');
let mobile_nav = document.getElementById('mobile--menu');
let body = document.getElementById('body');


mobile_btn.addEventListener('click', () => {
  mobile_nav.classList.toggle('active'),
  body.classList.toggle('overflow_hidden')

})
