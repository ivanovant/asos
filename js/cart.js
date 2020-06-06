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
});