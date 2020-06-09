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

  const scrollUp = $('.scroll-up__button');
  scrollUp.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
  });
});