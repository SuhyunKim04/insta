const slideWrap = document.querySelector('.slide_wrap');
console.log(slideWrap)
$(slideWrap).slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true
  });


const modal_cmt = () =>{
  const modal_container = document.querySelector('.modal_cmt_container')
  const open_cmt = documnet.querySelector('.open_cmt');
  const dim = document.querySelector('.dim');

  //open_modal
  // open_cmt.addEventListenr('click',(e) => {
  //   modal_container.
  // })

  //close_modal
//댓글창 all view 클릭해도 열리고 icon을 클릭해도 열리고
//dim 클릭하면 닫힌다
//accont page 햄버거 메뉴
}