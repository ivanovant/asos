"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  var swiper1 = new Swiper('.swiper1', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1'
    }
  });
  var swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 46,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2'
    },
    breakpoints: {
      1350: {
        slidesPerView: 4,
        spaceBetween: 46
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      220: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });
  var cardImage = document.querySelectorAll('.swiper2-slide');
  var productCard = document.querySelectorAll('.product-card__image-wrap');
  cardImage.forEach.call(productCard, function (el, i) {
    el.addEventListener('mouseenter', function (event) {
      var k = el.dataset.index;
      el.children[1].classList.add('wrap--active');

      function changeSrc(img) {
        zoomImage.src = './img/top-products/zoom-image' + k + '.jpg';
      }

      ;
      changeSrc();
    });
    el.addEventListener('mouseleave', function (event) {
      el.children[1].classList.remove('wrap--active');
      return false;
    });
  });
  var header = document.querySelector('.header');
  var menu = document.querySelector('.header__menu');
  window.addEventListener('scroll', function () {
    if (scrollY > 100) {
      header.classList.add('header--purple');
      menu.classList.add('header__menu--purple');
    } else {
      header.classList.remove('header--purple');
      menu.classList.remove('header__menu--purple');
    }
  });
  var zoom = document.querySelector('.zoom');
  var zoomBtn = document.querySelectorAll('[data-toggle=zoom]');
  var closeZoomBtn = document.querySelector('.zoom__close');

  var closeZoom = function closeZoom() {
    return zoom.classList.remove('zoom--visible');
  };

  var switchZoom = function switchZoom() {
    return zoom.classList.add('zoom--visible');
  };

  var zoomImage = document.getElementById('zoomImg');
  var swiper2Slides = document.querySelectorAll('.swiper2-slide');
  zoomBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      switchZoom();
    });
  });
  closeZoomBtn.addEventListener('click', closeZoom);
  document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      closeZoom();
    }
  });
  zoom.addEventListener('click', function (event) {
    if (event.target === zoom) {
      closeZoom();
    }
  });
  var next1 = document.querySelector('.swiper-button-next1');
  var prev1 = document.querySelector('.swiper-button-prev1');
  var nextPreview = document.querySelector('.swiper-slide-next-preview');

  var switchNextPreview = function switchNextPreview() {
    return nextPreview.classList.toggle('swiper-slide-next-preview--active');
  };

  var prevPreview = document.querySelector('.swiper-slide-prev-preview');

  var switchPrevPreview = function switchPrevPreview() {
    return prevPreview.classList.toggle('swiper-slide-prev-preview--active');
  };

  var slide = document.querySelectorAll('.swiper1-slide');

  var slidePreviewNext = function slidePreviewNext() {
    return nextPreview.classList.add('slide--second');
  };

  var slidePreviewPrev = function slidePreviewPrev() {
    return prevPreview.classList.add('slide--third');
  };

  slidePreviewNext();
  slidePreviewPrev();
  swiper1.on('slideChange', function () {
    slide.forEach(function (item, i, arr) {
      var k = swiper1.realIndex + 1;

      if (k === 1) {
        nextPreview.classList.add('slide--second'), prevPreview.classList.add('slide--third');
      } else {
        nextPreview.classList.remove('slide--second'), prevPreview.classList.remove('slide--third');
      }

      if (k === 2) {
        nextPreview.classList.add('slide--third'), prevPreview.classList.add('slide--first');
      } else {
        nextPreview.classList.remove('slide--third'), prevPreview.classList.remove('slide--first');
      }

      if (k === 3) {
        nextPreview.classList.add('slide--first'), prevPreview.classList.add('slide--second');
      } else {
        nextPreview.classList.remove('slide--first'), prevPreview.classList.remove('slide--second');
      }
    });
  });
  next1.addEventListener('mouseenter', function (event) {
    switchNextPreview();
  });
  next1.addEventListener('mouseleave', function (event) {
    switchNextPreview();
  });
  prev1.addEventListener('mouseenter', function (event) {
    switchPrevPreview();
  });
  prev1.addEventListener('mouseleave', function (event) {
    switchPrevPreview();
  });
  var menuBtn = document.querySelector('.menu__button');

  var switchBtn = function switchBtn() {
    return menuBtn.classList.toggle('menu__button--light--active');
  };

  var menuBtnItem = document.querySelector('.menu__button-item');

  var switchBtnItem = function switchBtnItem() {
    return menuBtnItem.classList.toggle('menu__button-item--light--active');
  };

  var nav = document.querySelector('.menu__nav');

  var switchNav = function switchNav() {
    return nav.classList.toggle('menu__nav--active');
  };

  menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    switchBtn();
    switchBtnItem();
    switchNav();
  });
  var cart = document.querySelector('.cart__modal');
  var cartLink = document.querySelector('.cart__link');

  var switchCart = function switchCart() {
    return cart.classList.toggle('cart__modal--visible');
  };

  var cartBtn = document.querySelectorAll('[data-toggle=cart]');
  cartBtn.forEach(function (element) {
    cartLink.addEventListener('click', function (event) {
      event.preventDefault();
    });
    element.addEventListener('click', function () {
      switchCart();
    });
  });
  var access1 = document.querySelector('.access');
  document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      cart.classList.remove('cart__modal--visible');
      search.classList.remove('search--visible');
      access1.classList.remove('access--visible');
    }
  });
  var searchBtn = document.querySelector('.search__link');
  var closeSearchBtn = document.querySelector('.search__close');
  var search = document.querySelector('.search');

  var switchSearch = function switchSearch() {
    return search.classList.toggle('search--visible');
  };

  searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    switchSearch();
  });
  closeSearchBtn.addEventListener('click', switchSearch);
  search.addEventListener('click', function (e) {
    if (e.target === search) {
      search.classList.remove('search--visible');
    }
  });
});
var offersForm = $('.offers__form');
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
      minlength: "Email не может содержать менее 8 символов"
    }
  }
});
$(document).ready(function () {
  var scrollUp = $('.scroll-up__button');
  scrollUp.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });
  var cart = $('.cart__modal');
  $(window).on('scroll', function () {
    var wide = $(window).width(); // Получаем ширину окна

    if (wide > 785) {
      if (scrollY > 100) {
        cart.addClass('cart--scroll');
      } else {
        cart.removeClass('cart--scroll');
      }
    } else {
      return true;
    }
  });
  $(document).mouseup(function (e) {
    if (!cart.is(e.target) && cart.has(e.target).length === 0) {
      cart.removeClass('cart__modal--visible');
    }
  });
  var access = $('.access');
  var accessClose = $('.access__close');
  var userLink = $('.user__link');
  accessClose.on('click', function () {
    access.toggleClass('access--visible');
  });
  userLink.on('click', function () {
    access.toggleClass('access--visible');
  });
  access.on('click', function (e) {
    if (access.is(e.target)) access.removeClass('access--visible');
  }); // $(document).one('mouseenter', (e) => {
  //   if (e.currentTarget = 'document') {
  //     $( "<script type=\"text/javascript\" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, \"script\", \"https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js\", \"ym\")   ; ym(64743577, \"init\", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src=\"https://mc.yandex.ru/watch/64743577\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>").appendTo('head')
  //   }
  // });
});