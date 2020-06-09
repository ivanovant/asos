$(document).ready(function () {

  
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
  const contactsForm = $('.contacts__form');
  
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          // success.toggleClass('success--visible');
        }
      });
    }
  });
  $('[type=tel]').mask('+7 (000) 000 00-00');

    let spinner = $('.ymap-container').children('.loader');

  let check_if_load = false;

  function init () {
    let myMap = new ymaps.Map('map-yandex', {
        center: [55.756842, 37.610323],
        zoom: 16
    }, {
        searchControlProvider: false
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Вход со двора'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/location.svg',
        iconImageSize: [102, 87],
        iconImageOffset: [-51, -78],
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    let layer = myMapTemp.layers.get(0).get(0);

    waitForTilesLoad(layer).then(function() {
      spinner.removeClass('is-active');
    });
  }
  
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      let tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (let k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  function loadScript(url, callback) {
    let script = document.createElement("script");
      script.onload = function() {
        callback();
      };
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  let ymap = function() {
    $('.ymap-container').mouseenter(function() {
        if (!check_if_load) { 
          check_if_load = true; 
          spinner.addClass('is-active');
          loadScript("https://api-maps.yandex.ru/2.1/?apikey=a00f0ba8-875e-472d-9d6e-105c41b610b1&lang=ru_RU", function() {
            ymaps.load(init);
          });                
        }
      }
    );  
  }
  
  $(function() {
    ymap();
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
      if (wide > 785) { console.log(wide)
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

  const header = $('.header');
  const menu = $('.header__menu')

  $(window).on('scroll', () => { 
    if (scrollY > 100) {
      menu.addClass('header__menu--dark--active')
    } else {
      menu.removeClass('header__menu--dark--active')
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

  const scrollUp = $('.scroll-up__button');
  scrollUp.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
  });
});