document.addEventListener("DOMContentLoaded", function(event) { 


  const swiper1 = new Swiper ('.swiper1', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });

  const menuBtn = document.querySelector('.menu__button');
  const switchBtn = () => menuBtn.classList.toggle('menu__button--active');
  const menuBtnItem = document.querySelector('.menu__button-item');
  const switchBtnItem = () => menuBtnItem.classList.toggle('menu__button-item--active');
  const nav = document.querySelector('.menu__nav');
  const switchNav = () => nav.classList.toggle('menu__nav--active');

  menuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    switchBtn();
    switchBtnItem();
    switchNav();
  });

    // const modal = document.querySelector('.modal');
  // const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  // const closeBtn = document.querySelector('.modal__close');
  // const switchModal = () => modal.classList.toggle('modal--visible');
  
  // modalBtn.forEach(element => {
  //   element.addEventListener('click', switchModal);
  // });
  // closeBtn.addEventListener('click', switchModal);
  // document.addEventListener('keydown', (event) => {
  //   if (event.key === "Escape" && modal.classList.contains('modal--visible')) {
  //       switchModal();
  //   }
  // });
  // modal.addEventListener('click', (event) => {
  //   if (event.target === modal) {
  //     switchModal();
  //   }
  // });
});