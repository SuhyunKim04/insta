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
  const modal = document.querySelector('.modal')
  const open_cmt = document.querySelector('.open_cmt');
  const dim = document.querySelector('.dim');

  // open_modal
  open_cmt.addEventListener('click',(e) => {
    modal.classList.add('open');
    dim.classList.add('open')
  })

  //close_modal
  dim.addEventListener('click',(e) => {
    modal.classList.remove('open');
    e.currentTarget.classList.remove('open')
  })
 

  //close_modal
//댓글창 all view 클릭해도 열리고 icon을 클릭해도 열리고
//dim 클릭하면 닫힌다
//accont page 햄버거 메뉴
}

const modal_post = () => {
  const post = document.querySelector('.post');
  const tabbar = document.querySelector('.tabbar_menu');
  const ico_create = tabbar.querySelector('.ico_create');
  const ico_close = post.querySelector('.ico_close');
  //open_modal
  ico_create.addEventListener('click', (e) => {
    console.log(ico_create)
    post.classList.add('open');
  })

  //close_modal
  ico_close.addEventListener('click',(e) => {
    console.log(ico_close)
    post.classList.remove('open')
  })

}

modal_cmt();
modal_post();