"use strict";

$(document).ready(function () {
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
        minlength: "Email не может содержать менее 10 символов"
      }
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
  var header = $('.header');
  var menu = $('.header__menu');
  $(window).on('scroll', function () {
    if (scrollY > 100) {
      menu.addClass('header__menu--dark--active');
    } else {
      menu.removeClass('header__menu--dark--active');
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
  var scrollUp = $('.scroll-up__button');
  scrollUp.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });
  var cart = $('.cart__modal');
  var cartLink = $('.cart__link');

  var switchCart = function switchCart() {
    return cart.toggleClass('cart__modal--visible');
  };

  var cartBtn = $('[data-toggle=cart]');
  cartLink.on('click', function (event) {
    event.preventDefault();
    switchCart();
  });
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
  $(document).on('keydown', function (event) {
    if (event.key === "Escape") {
      cart.removeClass('cart__modal--visible');
      search.removeClass('search--visible');
    }
  });
  var searchBtn = $('.search__link');
  var closeSearchBtn = $('.search__close');
  var search = $('.search');

  var switchSearch = function switchSearch() {
    return search.toggleClass('search--visible');
  };

  searchBtn.on('click', function (e) {
    e.preventDefault();
    switchSearch();
  });
  closeSearchBtn.on('click', switchSearch);
  $(document).mouseup(function (e) {
    if (search.is(e.target) && search.has(e.target).length === 0) {
      search.removeClass('search--visible');
    }
  });
  var menuBtn = $('.menu__button');

  var switchBtn = function switchBtn() {
    return menuBtn.toggleClass('menu__button--dark--active');
  };

  var menuBtnItem = $('.menu__button-item');

  var switchBtnItem = function switchBtnItem() {
    return menuBtnItem.toggleClass('menu__button-item--dark--active');
  };

  var nav = $('.menu__nav');

  var switchNav = function switchNav() {
    return nav.toggleClass('menu__nav--active');
  };

  menuBtn.on('click', function (event) {
    event.preventDefault();
    switchBtn();
    switchBtnItem();
    switchNav();
  });
  $(document).one('mouseenter', function (e) {
    if (e.currentTarget = 'document') {
      $("<script type=\"text/javascript\" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, \"script\", \"https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js\", \"ym\")   ; ym(64743577, \"init\", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src=\"https://mc.yandex.ru/watch/64743577\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>").appendTo('head');
    }
  });
});