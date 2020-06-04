document.addEventListener("DOMContentLoaded", function(event) { 

  const swiper1 = new Swiper ('.swiper1', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });
  const swiper2 = new Swiper ('.swiper2', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 46,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
      1350: {
        slidesPerView: 4,
        spaceBetween: 46,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      220: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
  });
  
  const cardImage = document.querySelectorAll('.swiper2-slide');
  const productCard = document.querySelectorAll('.product-card__image-wrap');
    
    cardImage.forEach.call(productCard, function (el, i){
      el.addEventListener('mouseenter', function (event) {
        console.log(el.dataset.index)
        let k = el.dataset.index
        el.children[1].classList.add('wrap--active');
        function changeSrc(img) {
          zoomImage.src = './img/top-products/zoom-image' + k + '.jpg';
        };
        changeSrc();
      })
      el.addEventListener('mouseleave', (event) => {
        el.children[1].classList.remove('wrap--active');
        return false;
      });
    });





  const zoom = document.querySelector('.zoom');
  const zoomBtn = document.querySelectorAll('[data-toggle=zoom]');
  const closeZoomBtn = document.querySelector('.zoom__close');
  const closeZoom = () => zoom.classList.remove('zoom--visible');
  const switchZoom = () => zoom.classList.add('zoom--visible');
  const zoomImage = document.getElementById('zoomImg');
  const swiper2Slides = document.querySelectorAll('.swiper2-slide');

  zoomBtn.forEach(element => {
    element.addEventListener('click', function(e) {
      switchZoom();
      console.log()
      
    });
  });


  closeZoomBtn.addEventListener('click', closeZoom);

  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeZoom();
    }
  });
  zoom.addEventListener('click', (event) => {
    if (event.target === zoom) {
      closeZoom();
    }
  });


  const next1 = document.querySelector('.swiper-button-next1');
  const prev1 = document.querySelector('.swiper-button-prev1');

  const nextPreview = document.querySelector('.swiper-slide-next-preview');
  const switchNextPreview = () => nextPreview.classList.toggle('swiper-slide-next-preview--active');
  const prevPreview = document.querySelector('.swiper-slide-prev-preview');
  const switchPrevPreview = () => prevPreview.classList.toggle('swiper-slide-prev-preview--active');
  const slide = document.querySelectorAll('.swiper1-slide');
  const slidePreviewNext = () => nextPreview.classList.add('slide--second');
  const slidePreviewPrev = () => prevPreview.classList.add('slide--third');


  slidePreviewNext();
  slidePreviewPrev();

  swiper1.on('slideChange', () => {
    slide.forEach(function (item, i, arr) {
      let k = swiper1.realIndex + 1;
        if (k === 1) {
          nextPreview.classList.add('slide--second'),
          prevPreview.classList.add('slide--third')
        } else {
          nextPreview.classList.remove('slide--second'),
          prevPreview.classList.remove('slide--third')
          } if (k === 2) {
            nextPreview.classList.add('slide--third'),
            prevPreview.classList.add('slide--first')
          } else {
            nextPreview.classList.remove('slide--third'),
            prevPreview.classList.remove('slide--first')
            } if (k === 3) {
              nextPreview.classList.add('slide--first'),
              prevPreview.classList.add('slide--second')
            } else {
              nextPreview.classList.remove('slide--first'),
              prevPreview.classList.remove('slide--second')
              }
    });
  });
  next1.addEventListener('mouseenter', (event) => {
    switchNextPreview();
  });
  next1.addEventListener('mouseleave', (event) => {
    switchNextPreview();
  });
  
  prev1.addEventListener('mouseenter', (event) => {
    switchPrevPreview();
  });
  prev1.addEventListener('mouseleave', (event) => {
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