const slideWrap = document.querySelector('.slide_wrap');
$(slideWrap).slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true
  });


const modal_cmt = () =>{
  const open_cmt = document.querySelector('.open_cmt');
  if( !open_cmt ) {
    return false;
  }
  const modal = document.querySelector('.modal')
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

const modal_ham = () => {
  const ham = document.querySelector('.ico_hamburger');

  if( !ham ) {
    return false;
  }
  const modal = document.querySelector('.modal'); 
  const dim = document.querySelector('.dim');

  //open modal
  ham.addEventListener('click',(e) => {
    console.log('hello')
    dim.classList.add('open')
    modal.classList.add('open');
  })

  //close modal
  dim.addEventListener('click',(e) => {
    modal.classList.remove('open');
    e.currentTarget.classList.remove('open')
  })


}




 


const modal_chat = () => {
  //init;
  const modal_cmt_container = document.querySelector('.modal_cmt_container');
  if(!modal_cmt_container){
    return false;
  }
  const dep1 = modal_cmt_container.querySelector('.dep1');
  const cmt_chat = document.querySelector('.cmt_chat');
  const ico_upload = cmt_chat.querySelector('.ico_upload');
  const chat = document.querySelector('.text_focus')
  const count = document.querySelector('.cmt_count');
  let cmtList = []
  
  let allCount;

  const names = [
    'Liam',
    'Noah',
    'Luna',
    'Ava',
    'James',
    'Lucas',
    'Clara'
  ]

  getCount();

  // get Random
  function getNum() {
    return  Math.floor(Math.random() * 6);
  }

  ico_upload.addEventListener('click',addCmt) 

  chat.addEventListener('keydown', (e) => {
    if(e.keyCode == 13){
      addCmt();
    }
  })
    
  function getCount() { 
    count.innerHTML =  document.querySelectorAll('.cmt_item').length;
  }


  function addCmt() {
    let randomN = getNum(); 
    let li = document.createElement('LI');
    let now = timeStamp();
   
    li.classList.add('cmt_item')
    li.innerHTML = `
      <a href="https://www.google.ca/" class="cmt_profile">
        <img src="./images/photo/profile_${randomN}.jpg" alt="profile">
      </a>

      <div class="cmt_body">
          <a href="https://www.google.ca/">
              ${names[randomN]}
          </a>
          <span>${now}</span>
          <div class="article">
              <p>${chat.value}</p>
          </div>
          <button type="button" class="reply">Reply</button>
      </div> 
      <button type="button"  class="cmt_heart toggle">
          <span class="num">2</span>
      </button> 
    `

    dep1.appendChild(li)
    
    getCount() 
  }
 
}



const top_modal = () => {
  const modal_focus = document.querySelector('.modal_focus button');
  if(!modal_focus){
    return false;
  }
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
let nums = [ 1,2,3,4,5]
let result = nums.map( data => data*2)


let result2 = []

nums.forEach(data => {
 result2.push(data*2)
})
console.log(result)

function timeStamp() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let date = today.getDate(); 
   
  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;

  let times = [ today.getHours(), today.getMinutes(), today.getSeconds()]
  times = times.map(data => data < 10 ? `0${data}` : data)
  
  return  `${year}-${month}-${date}  ${times[0]}:${times[1]}:${times[2]}`
  
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
modal_chat();
modal_ham();