const slideWrap = document.querySelector('.slide_wrap');
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
 
}

const top_modal = () => {
  const modal_focus = document.querySelector('.modal_focus button');
 
  const top_modal = document.querySelector('.top_modal');

  modal_focus.addEventListener('click', (e) => {
    console.log('hello')
    top_modal.classList.toggle('open')
  })
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

const iconToggle = () => {
  const toggle = document.querySelectorAll('.toggle');
  const num = document.querySelectorAll
  console.log(toggle)
  toggle.forEach(icon => {
    icon.addEventListener('click', () => {
      console.log('clicked')
      icon.classList.toggle('active');
    })
  })
  //숫자 올리기
}

// const login = () => {
//   const id = document.querySelector('.id');
//   const psw = document.querySelector('.psw');
//   const start = document.querySelector('.start');
  
//   function checkIn() {
//     if(id.value == "suhyun" && psw.value == "webpublisher"){
//       start.addEventListener('click',(e) => {
//         console.log(start)
//         window.location.href = './home.html'
//       })
//       return start.style.backgroundColor = "#3e89ee"
//     }else if(id.value == "" && psw.value == ""){
//       alert('다시 시도하세요')
//     }
//   }
// }

function timeStamp() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let date = today.getDate(); 
  
  let hours = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds(); 

  let nowDate = `${year}-${month}-${date}  ${hours}:${min}:${sec}`
  return nowDate;
}


const modalReply =() =>{
  const cmt_item = document.querySelectorAll('.cmt_item');
  const pop = document.querySelector('.pop');
  const ico_close = pop.querySelector('.ico_close');
  const reply = document.querySelector('.reply')

  cmt_item.forEach((item,idx) => {
    reply = btn;
    reply.addEventListener('click', (e) => {
      console.log(chat)
      pop.classList.add('open')
    })
  })
  

  ico_close.addEventListener('click', (e) => {
    pop.classList.remove('open')
  })
}

modal_cmt();
modal_post();
iconToggle();
// login();
// modalReply();

top_modal();