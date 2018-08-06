$('.index__card').on('click', function(event) {
  $(event.target).children('.card__menu').toggleClass('card__menu--active');
  event.preventDefault();
  event.stopPropagation();
})

$('.index__card img').on('click', function(event) {
  console.log('img');
  $(event.target).next('.card__menu').toggleClass('card__menu--active');
  event.preventDefault();
  event.stopPropagation();
})

$('.bot__item--catalog').on('click', function() {
  $('.item__catalog').toggleClass('item__catalog--active');
});

$('.bot__humburger').on('click', function() {
  $('.bot__humburger-list').toggleClass('bot__humburger-list--active');
});

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

