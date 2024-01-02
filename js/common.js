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

const modal_ham = () => {
  const modal = document.querySelector('.modal');
  console.log(modal)
  const ham = document.querySelector('.ico_hamburger');
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


const photos = [0,1,2,3,4,5,6];
let randomPhotos = photos[getRandomElementIndex()];
  console.log(randomPhotos);
function getRandomElementIndex() {
  let random = Math.random() * photos.length;
  return Math.floor(random);
  
}

// const name = [
//   Liam,
//   Noah,
//   Luna,
//   Ava,
//   James,
//   Lucas,
//   Clara
// ]

const img = [

]
// const datas =[
//   {
//     id:0,
//     name: Liam,
//     photo: `
//     <a href="https://www.google.ca/" class="cmt_profile">
//       <img src="./images/photo/profile_${randomPhotos}.jpg" alt="profile">
//     </a>`
// },
// {
//     id:1,
//     name: Noah,
//     photo: `
//     <a href="https://www.google.ca/" class="cmt_profile">
//       <img src="./images/photo/profile_7.jpg" alt="profile">
//     </a>`
// },
// {
//     id:2,
//     name: Luna,
//     photo: `
//     <a href="https://www.google.ca/" class="cmt_profile">
//       <img src="./images/photo/profile_6.jpg" alt="profile">
//     </a>`
// },
// {
//     id:3,
//     name: Ava,
//     photo: `
//     <a href="https://www.google.ca/" class="cmt_profile">
//       <img src="./images/photo/profile_2.jpg" alt="profile">
//     </a>`
// },
// {
//     id:4,
//     name: James,
//     photo: `
//     <a href="https://www.google.ca/" class="cmt_profile">
//       <img src="./images/photo/profile_5.jpg" alt="profile">
//     </a>`
// },
// {
//     id:5,
//     name: Lucas,
//     photo: `
//     <a href="https://www.google.ca/" class="cmt_profile">
//       <img src="./images/photo/profile_4.jpg" alt="profile">
//     </a>`
// },
// {
//     id:6,
//     name: Clara,
//     photo: `
//     <a href="https://www.google.ca/" class="cmt_profile">
//       <img src="./images/photo/profile_1.jpg" alt="profile">
//     </a>`
// }

// ]

const modal_chat = () => {
  const modal_cmt_container = document.querySelector('.modal_cmt_container');
  const dep1 = modal_cmt_container.querySelector('.dep1');
  const cmt_chat = document.querySelector('.cmt_chat');
  const ico_upload = cmt_chat.querySelector('.ico_upload');
  const chat = document.querySelector('.text_focus')

  function info(index) {
    name.innerHTML = datas[index]
  }

  ico_upload.addEventListener('click', () => {
    console.log('hello')
    let li = document.createElement('LI');
    li.innerHTML = `
      <a href="https://www.google.ca/" class="cmt_profile">
        <img src="./images/photo/profile_4.jpg" alt="profile">
      </a>

      <div class="cmt_body">
          <a href="https://www.google.ca/">
              michaela
          </a>
          <span>6 h</span>
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
modal_chat();
modal_ham();