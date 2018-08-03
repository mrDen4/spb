$('.index__card').on('click', function() {
  $('.card__menu').css('height', '100px');
  $('.card__menu').css('padding', '10px');
})

$('.another__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prev__btn'),
    nextArrow: $('.next__btn'),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
  });

