document.addEventListener("DOMContentLoaded", function(event) { 

  const swiper1 = new Swiper ('.swiper1', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });

  const next1 = document.querySelector('.swiper-button-next1');
  const prev1 = document.querySelector('.swiper-button-prev1');

  const nextPreview = document.querySelector('.swiper-slide-next-preview');
  const switchNextPreview = () => nextPreview.classList.toggle('swiper-slide-next-preview--active');
  const prevPreview = document.querySelector('.swiper-slide-prev-preview');
  const switchPrevPreview = () => prevPreview.classList.toggle('swiper-slide-prev-preview--active');
  const slide = document.querySelectorAll('.swiper-slide');

  next1.addEventListener('mouseover', (event) => {
    switchNextPreview();
    slide.forEach(function (item, i, arr) {
      if (item.classList.contains('swiper-slide-active')) {
        if (i === 1) {nextPreview.classList.add('slide-second')} else {nextPreview.classList.remove('slide-second')
          } if (i === 2) {nextPreview.classList.add('slide-third')} else {nextPreview.classList.remove('slide-third')
            } if (i === 3) {nextPreview.classList.add('slide-first')} else {nextPreview.classList.remove('slide-first')
              } if (i === 4) {nextPreview.classList.add('slide-fourth')} else {nextPreview.classList.remove('slide-fourth')
                } if (i === 0) {nextPreview.classList.add('slide-sixth')} else {nextPreview.classList.remove('slide-sixth')}
      }
    }); 
  });
  
  next1.addEventListener('mouseout', (event) => {
    switchNextPreview();
  });
  
  prev1.addEventListener('mouseover', (event) => {
    switchPrevPreview();
    slide.forEach(function (item, k, arr) {
      if (item.classList.contains('swiper-slide-active')) {
        let l = k + 2;
        if (l === 3) {prevPreview.classList.add('slide-third')} else {prevPreview.classList.remove('slide-third')
          } if (l === 2) {prevPreview.classList.add('slide-second')} else {prevPreview.classList.remove('slide-second')
            } if (l === 4) {prevPreview.classList.add('slide-first')} else {prevPreview.classList.remove('slide-first')
              } if (l === 6) {prevPreview.classList.add('slide-fifth')} else {prevPreview.classList.remove('slide-fifth')
                } if (l === 5) {prevPreview.classList.add('slide-fourth')} else {prevPreview.classList.remove('slide-fourth')}
      } 
    })
  });
  prev1.addEventListener('mouseout', (event) => {
    switchPrevPreview();
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

});