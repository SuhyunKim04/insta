const slideWrap = document.querySelector('.slide_wrap');
console.log(slideWrap)
$(slideWrap).slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true
  });

