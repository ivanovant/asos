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

  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        cart.classList.remove('cart__modal--visible');
        search.classList.remove('search--visible');
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
        minlength: "Email не может содержать менее 10 символов"
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
    if (scrollY > 100) {
      cart.addClass('cart--scroll')
    } else {
      cart.removeClass('cart--scroll')
    }
  });
	$(document).mouseup(function (e){
		if (!cart.is(e.target)
		    && cart.has(e.target).length === 0) {
          cart.removeClass('cart__modal--visible');
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
//   $('.select').each(function() {
//     const _this = $(this),
//         selectOption = _this.find('option'),
//         selectOptionLength = selectOption.length,
//         selectedOption = selectOption.filter(':selected'),
//         duration = 450; // длительность анимации 

//     _this.hide();
//     _this.wrap('<div class="select"></div>');
//     $('<div>', {
//         class: 'new-select',
//         text: _this.children('option:disabled').text()
//     }).insertAfter(_this);

//     const selectHead = _this.next('.new-select');
//     $('<div>', {
//         class: 'new-select__list'
//     }).insertAfter(selectHead);

//     const selectList = selectHead.next('.new-select__list');
//     for (let i = 1; i < selectOptionLength; i++) {
//         $('<div>', {
//             class: 'new-select__item',
//             html: $('<span>', {
//                 text: selectOption.eq(i).text()
//             })
//         })
//         .attr('data-value', selectOption.eq(i).val())
//         .appendTo(selectList);
//     }

//     const selectItem = selectList.find('.new-select__item');
//     selectList.slideUp(0);
//     selectHead.on('click', function() {
//         if ( !$(this).hasClass('on') ) {
//             $(this).addClass('on');
//             selectList.slideDown(duration);

//             selectItem.on('click', function() {
//                 let chooseItem = $(this).data('value');

//                 $('select').val(chooseItem).attr('selected', 'selected');
//                 selectHead.text( $(this).find('span').text() );

//                 selectList.slideUp(duration);
//                 selectHead.removeClass('on');
//             });

//         } else {
//             $(this).removeClass('on');
//             selectList.slideUp(duration);
//         }
//     });
// });
});