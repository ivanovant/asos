$(document).ready(function () {

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
  const offersForm = $('.offers__form');
  
  offersForm.validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userEmail: {
        required: true,
        email: true,
        minlength: 8
      }
    },
    messages: {
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
        minlength: "Email не может содержать менее 10 символов"
      }
    },
  });

  const access = $('.access');
  const accessClose = $('.access__close')
  const userLink = $('.user__link')

  accessClose.on('click', () => {
    access.toggleClass('access--visible')
  });
  userLink.on('click', () => {
    access.toggleClass('access--visible');
  })

  access.on('click', (e) => {
    if (access.is(e.target))
      access.removeClass('access--visible');
    });
    
  const cardImage = document.querySelectorAll('.swiper2-slide');
  const productCard = document.querySelectorAll('.product-card__image-wrap');
    
    cardImage.forEach.call(productCard, function (el, i){
      el.addEventListener('mouseenter', function (event) {
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

    const header = $('.header');
    const menu = $('.header__menu')
  
    $(window).on('scroll', () => { 
      if (scrollY > 100) {
        menu.addClass('header__menu--dark--active')
      } else {
        menu.removeClass('header__menu--dark--active')
      }
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
  
  const scrollUp = $('.scroll-up__button');
  scrollUp.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
  });

  const cart = $('.cart__modal');
  const cartLink = $('.cart__link');
  const switchCart = () => cart.toggleClass('cart__modal--visible');
  const cartBtn = $('[data-toggle=cart]');


    cartLink.on('click', (event) => {
      event.preventDefault();
      switchCart();
    });

    $(window).on('scroll', () =>{
      let wide = $(window).width(); // Получаем ширину окна
      if (wide > 785) { 
        if (scrollY > 100) {
          cart.addClass('cart--scroll')
        } else {
          cart.removeClass('cart--scroll')}
      } else { return true}
    });
    $(document).mouseup(function (e){
      if (!cart.is(e.target)
          && cart.has(e.target).length === 0) {
            cart.removeClass('cart__modal--visible');
      }
    });
  $(document).on('keydown', (event) => {
    if (event.key === "Escape") {
        cart.removeClass('cart__modal--visible');
        search.removeClass('search--visible');
    }
  });

  const searchBtn = $('.search__link');
  const closeSearchBtn = $('.search__close');
  const search = $('.search');
  const switchSearch = () => search.toggleClass('search--visible');

  searchBtn.on('click', (e) => { 
    e.preventDefault();
    switchSearch();
  });

  closeSearchBtn.on('click', switchSearch);

    $(document).mouseup(function (e){
      if (search.is(e.target)
          && search.has(e.target).length === 0) {
            search.removeClass('search--visible');
      }
    });


  
  const menuBtn = $('.menu__button');
  const switchBtn = () => menuBtn.toggleClass('menu__button--dark--active');
  const menuBtnItem = $('.menu__button-item');
  const switchBtnItem = () => menuBtnItem.toggleClass('menu__button-item--dark--active');
  const nav = $('.menu__nav');
  const switchNav = () => nav.toggleClass('menu__nav--active');
  menuBtn.on('click', (event) => {
    event.preventDefault();
    switchBtn();
    switchBtnItem();
    switchNav();
  });
  $(document).one('mouseenter', (e) => {
    if (e.currentTarget = 'document') {
      $( "<script type=\"text/javascript\" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, \"script\", \"https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js\", \"ym\")   ; ym(64743577, \"init\", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src=\"https://mc.yandex.ru/watch/64743577\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>").appendTo('head')
    }
  });
});