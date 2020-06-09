"use strict";

$(document).ready(function () {
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
  });
  var scrollUp = $('.scroll-up__button');
  scrollUp.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1500);
    return false;
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
  var header = $('.header');
  var menu = $('.header__menu');
  $(window).on('scroll', function () {
    if (scrollY > 100) {
      menu.addClass('header__menu--dark--active');
    } else {
      menu.removeClass('header__menu--dark--active');
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
  $(document).one('mouseenter', function (e) {
    if (e.currentTarget = 'document') {
      $("<script type=\"text/javascript\" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, \"script\", \"https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js\", \"ym\")   ; ym(64743577, \"init\", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src=\"https://mc.yandex.ru/watch/64743577\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>").appendTo('head');
    }
  });
});