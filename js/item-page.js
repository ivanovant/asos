document.addEventListener("DOMContentLoaded", function(event) { 

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

    const header = document.querySelector('.header');
    const menu = document.querySelector('.header__menu')

    window.addEventListener('scroll', () => { 
      if (scrollY > 100) {
        header.classList.add('header--purple');
        menu.classList.add('header__menu--purple')
      } else {
        header.classList.remove('header--purple');
        menu.classList.remove('header__menu--purple')
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
  
  const menuBtn = document.querySelector('.menu__button');
  const switchBtn = () => menuBtn.classList.toggle('menu__button--light--active');
  const menuBtnItem = document.querySelector('.menu__button-item');
  const switchBtnItem = () => menuBtnItem.classList.toggle('menu__button-item--light--active');
  const nav = document.querySelector('.menu__nav');
  const switchNav = () => nav.classList.toggle('menu__nav--active');
  menuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    switchBtn();
    switchBtnItem();
    switchNav();
  });

  const cart = document.querySelector('.cart__modal');
  const cartLink = document.querySelector('.cart__link');
  const switchCart = () => cart.classList.toggle('cart__modal--visible');
  const cartBtn = document.querySelectorAll('[data-toggle=cart]');


  cartBtn.forEach(element => {
    cartLink.addEventListener('click', (event) => {
      event.preventDefault();
    });
    element.addEventListener('click', () => {
    switchCart();
    });
  });
  const size1 = document.querySelector('.size')
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        cart.classList.remove('cart__modal--visible');
        search.classList.remove('search--visible');
        size1.classList.remove('size--visible')
    }
  });

  const searchBtn = document.querySelector('.search__link');
  const closeSearchBtn = document.querySelector('.search__close');
  const search = document.querySelector('.search');
  const switchSearch = () => search.classList.toggle('search--visible');

  searchBtn.addEventListener('click', (e) => { 
    e.preventDefault();
    switchSearch();
  });
  closeSearchBtn.addEventListener('click', switchSearch);
  search.addEventListener('click', (e) => {
    if (e.target === search) {search.classList.remove('search--visible')}
  });
});

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
        minlength: "Email не может содержать менее 8 символов"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
        }
      });
    },
  });
});
  const reviewForm = $('.review__form');
    
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
        required:true,
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
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
        }
      });
    }
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
  const swiper3 = new Swiper ('.swiper3', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  });
  const slide = $('.swiper3-slide');
  const previewBlock = $('.item__preview-block');
  const previewWrap = $('.preview__image-wrap');
  const previewImage = $('.swiper-slide__image');
  const switchSlide = () => $('#1').toggleClass('preview__image-wrap--active');

  switchSlide();
  previewWrap.on('click', (e) => {
    let k = e.currentTarget.id
    swiper3.slideTo(k)
    let target = e.currentTarget;
    $(previewImage).each(i => $(previewWrap).removeClass('preview__image-wrap--active'))
    $(target).addClass('preview__image-wrap--active');
  });

  let next3 = $('.swiper-button-next3');
  let prev3 = $('.swiper-button-prev3');

  next3.on('click', () => {
    let k = swiper3.realIndex + 1;
    let m = document.getElementById(k);
    $(previewWrap).removeClass('preview__image-wrap--active')
    $(m).addClass('preview__image-wrap--active')
  });
  prev3.on('click', () => {
    let k = swiper3.realIndex + 1;
    let m = document.getElementById(k);
    $(previewWrap).removeClass('preview__image-wrap--active')
    $(m).addClass('preview__image-wrap--active')
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
  const header = $('.header');
  const menu = $('.header__menu')

  $(window).on('scroll', () => { 
    if (scrollY > 100) {
      menu.addClass('header__menu--dark--active')
    } else {
      menu.removeClass('header__menu--dark--active')
    }
   });

   const itemWrap = $('.item__input-wrap');
   const item = $('.item__color-choice');

   itemWrap.on('click', (e) => {
    let target = e.target;
    let i = $(item).index(target);
    $(item).each(i => $(item).removeClass('item-' + (i + 1)))
    $(target).addClass('item-' + (i + 1));
  });
   const sizeWrap = $('.item__size-choise-wrap');
   const sizeVal = $('.item__size-choice-value');

   sizeWrap.on('click', (e) => {
    let target = e.target;
    let i = $(sizeVal).index(target);
    $(sizeVal).each(i => $(sizeVal).removeClass('item__size-choice-value--active')),
    $(target).addClass('item__size-choice-value--active')
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

  const size = $('.size');
  const sizeClose = $('.size__close');
  const sizeBtn = $('.item__size-table-button');
  const currentSize = $('.size__col');
  const sizeRow = $('.size__row--purpule');
  const switchOnSize = () => $(size).addClass('size--visible');
  const switchOffSize = () => $(size).removeClass('size--visible');
  sizeBtn.on('click', switchOnSize)
  sizeClose.on('click', switchOffSize);

  $(document).on('click', (e) => {
    if (size.is(e.target)) {
      switchOffSize();
    }
  })
  sizeRow.on('click', (e) => {
    let target = e.currentTarget;
    let i = $(sizeRow).index(target)
    $(currentSize).each(i => $(sizeRow).removeClass('size__row--purpule--active'))
    $(target).addClass('size__row--purpule--active');
  });

  const tabBtn = $('.tabs__links')

  const tab = $('.tabs > div'); 

	tabBtn.click(function(event){
    event.preventDefault();
		tab.hide(); 
    tab.filter(event.target.hash).show();
		$(tabBtn).removeClass('about__item--active');
		$(this).addClass('about__item--active');
		return false;
  })
  
});

