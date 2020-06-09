"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
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
  var size1 = document.querySelector('.size');
  document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      cart.classList.remove('cart__modal--visible');
      search.classList.remove('search--visible');
      size1.classList.remove('size--visible');
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
$(document).ready(function () {
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
});
var reviewForm = $('.review__form');
reviewForm.validate({
  errorClass: "invalid",
  errorElement: "div",
  rules: {
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userEmail: {
      required: true,
      email: true,
      minlength: 8
    },
    userText: {
      required: true,
      minlength: 10
    }
  },
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длиннее пятнадцати букв"
    },
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email",
      minlength: "Email не может содержать менее 8 символов"
    },
    userText: {
      required: "Напишите ваш отзыв",
      minlength: "В отзыве должно быть не менее 10 символов"
    }
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
var swiper3 = new Swiper('.swiper3', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3'
  }
});
var slide = $('.swiper3-slide');
var previewBlock = $('.item__preview-block');
var previewWrap = $('.preview__image-wrap');
var previewImage = $('.swiper-slide__image');

var switchSlide = function switchSlide() {
  return $('#1').toggleClass('preview__image-wrap--active');
};

switchSlide();
previewWrap.on('click', function (e) {
  var k = e.currentTarget.id;
  swiper3.slideTo(k);
  var target = e.currentTarget;
  $(previewImage).each(function (i) {
    return $(previewWrap).removeClass('preview__image-wrap--active');
  });
  $(target).addClass('preview__image-wrap--active');
});
var next3 = $('.swiper-button-next3');
var prev3 = $('.swiper-button-prev3');
next3.on('click', function () {
  var k = swiper3.realIndex + 1;
  var m = document.getElementById(k);
  $(previewWrap).removeClass('preview__image-wrap--active');
  $(m).addClass('preview__image-wrap--active');
});
prev3.on('click', function () {
  var k = swiper3.realIndex + 1;
  var m = document.getElementById(k);
  $(previewWrap).removeClass('preview__image-wrap--active');
  $(m).addClass('preview__image-wrap--active');
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
var header = $('.header');
var menu = $('.header__menu');
$(window).on('scroll', function () {
  if (scrollY > 100) {
    menu.addClass('header__menu--dark--active');
  } else {
    menu.removeClass('header__menu--dark--active');
  }
});
var itemWrap = $('.item__input-wrap');
var item = $('.item__color-choice');
itemWrap.on('click', function (e) {
  var target = e.target;
  var i = $(item).index(target);
  $(item).each(function (i) {
    return $(item).removeClass('item-' + (i + 1));
  });
  $(target).addClass('item-' + (i + 1));
});
var sizeWrap = $('.item__size-choise-wrap');
var sizeVal = $('.item__size-choice-value');
sizeWrap.on('click', function (e) {
  var target = e.target;
  var i = $(sizeVal).index(target);
  $(sizeVal).each(function (i) {
    return $(sizeVal).removeClass('item__size-choice-value--active');
  }), $(target).addClass('item__size-choice-value--active');
});
$('.card__select').on('click', '.card-select__head', function () {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(this).next().fadeOut();
  } else {
    $('.card-select__head').removeClass('open');
    $('.card-select__list').fadeOut();
    $(this).addClass('open');
    $(this).next().fadeIn();
  }
});
$('.card__select').on('click', '.card-select__item', function () {
  $('.card-select__head').removeClass('open');
  $(this).parent().fadeOut();
  $(this).parent().prev().text($(this).text());
  $(this).parent().prev().prev().val($(this).text());
});
$(document).click(function (e) {
  if (!$(e.target).closest('.card__select').length) {
    $('.card-select__head').removeClass('open');
    $('.card-select__list').fadeOut();
  }

  var size = $('.size');
  var sizeClose = $('.size__close');
  var sizeBtn = $('.item__size-table-button');
  var currentSize = $('.size__col');
  var sizeRow = $('.size__row--purpule');

  var switchOnSize = function switchOnSize() {
    return $(size).addClass('size--visible');
  };

  var switchOffSize = function switchOffSize() {
    return $(size).removeClass('size--visible');
  };

  sizeBtn.on('click', switchOnSize);
  sizeClose.on('click', switchOffSize);
  $(document).on('click', function (e) {
    if (size.is(e.target)) {
      switchOffSize();
    }
  });
  sizeRow.on('click', function (e) {
    var target = e.currentTarget;
    var i = $(sizeRow).index(target);
    $(currentSize).each(function (i) {
      return $(sizeRow).removeClass('size__row--purpule--active');
    });
    $(target).addClass('size__row--purpule--active');
  });
  var tabBtn = $('.tabs__links');
  var tab = $('.tabs > div');
  tabBtn.click(function (event) {
    event.preventDefault();
    tab.hide();
    tab.filter(event.target.hash).show();
    $(tabBtn).removeClass('about__item--active');
    $(this).addClass('about__item--active');
    return false;
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
  $(document).one('mouseenter', function (e) {
    if (e.currentTarget = 'document') {
      $("<script type=\"text/javascript\" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, \"script\", \"https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js\", \"ym\")   ; ym(64743577, \"init\", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src=\"https://mc.yandex.ru/watch/64743577\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>").appendTo('head');
    }
  });
});