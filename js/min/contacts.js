"use strict";

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
        minlength: "Email не может содержать менее 10 символов"
      }
    }
  });
  var contactsForm = $('.contacts__form');
  contactsForm.validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      userEmail: {
        required: true,
        email: true,
        minlength: 8
      },
      userName: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
        minlength: "Email не может содержать менее 8 символов"
      },
      userName: {
        required: "Заполните поле",
        minlength: "Имя не может быть короче двух букв"
      }
    }
  });
  $('[type=tel]').mask('+7 (000) 000 00-00');
  var spinner = $('.ymap-container').children('.loader');
  var check_if_load = false;

  function init() {
    var myMap = new ymaps.Map('map-yandex', {
      center: [55.756842, 37.610323],
      zoom: 16
    }, {
      searchControlProvider: false
    }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Наш офис',
      balloonContent: 'Вход со двора'
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/location.svg',
      iconImageSize: [102, 87],
      iconImageOffset: [-51, -78]
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    var layer = myMapTemp.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function () {
      spinner.removeClass('is-active');
    });
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer),
          readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });

      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer || layer[k] instanceof ymaps.layer.tileContainer.DomContainer) {
          return layer[k];
        }
      }
    }

    return null;
  }

  function loadScript(url, callback) {
    var script = document.createElement("script");

    script.onload = function () {
      callback();
    };

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  var ymap = function ymap() {
    $('.ymap-container').mouseenter(function () {
      if (!check_if_load) {
        check_if_load = true;
        spinner.addClass('is-active');
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=a00f0ba8-875e-472d-9d6e-105c41b610b1&lang=ru_RU", function () {
          ymaps.load(init);
        });
      }
    });
  };

  $(function () {
    ymap();
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
  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
    } else {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
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
  var header = $('.header');
  var menu = $('.header__menu');
  $(window).on('scroll', function () {
    if (scrollY > 100) {
      menu.addClass('header__menu--dark--active');
    } else {
      menu.removeClass('header__menu--dark--active');
    }
  });
  $('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
  });
  $(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
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