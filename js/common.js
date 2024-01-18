const slideWrap = document.querySelectorAll('.slide_wrap');

slideWrap.forEach((slides,idx) => {
  $(slides).slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

  });
})

const modal_cmt = () =>{
  const open_cmt = document.querySelector('.open_cmt');
  if( !open_cmt ) {
    return false;
  }
  const modal = document.querySelector('.modal');
  const dim = document.querySelector('.dim');
  const btnChat = document.querySelector('.ico_chat');
  

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

  btnChat.addEventListener('click', (e) => {
    modal.classList.add('open');
    dim.classList.add('open')
  })
 
}





const modal_chat = () => {
  //init;
  const reset = document.querySelector('.title');
  const modal_cmt_container = document.querySelector('.modal_cmt_container');
  if(!modal_cmt_container){
    return false;
  }
  const dep1 = modal_cmt_container.querySelector('.dep1');
  const cmt_chat = document.querySelector('.cmt_chat');
  const emojis = document.querySelectorAll('.emojis button');
  const count = document.querySelector('.cmt_count');
  const cmtForm = document.forms.cmt_form;
  const msg = cmtForm.msg;
  let textList = [];
  
  let allCount;
  printList();

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


  emojis.forEach((item,idx) => {
    item.addEventListener('click', () => {
      console.log(item.children[1].textContent)

      msg.value = msg.value + item.children[1].textContent
    })
  })

  // get Random
  function getNum() {
    return  Math.floor(Math.random() * 6);
  }


  function getCount() { 
    count.innerHTML =  document.querySelectorAll('.cmt_item').length;
  }

  function printList() {
    getStorage();
    
    let html = '';
    textList.forEach(text => {
      html += `
      <li class="cmt_item">
         <a href="https://www.google.ca/" class="cmt_profile">
           <img src=${text.photo} alt="profile">
         </a>
   
         <div class="cmt_body">
             <a href="https://www.google.ca/">
                ${text.name}
             </a>
             <span>${text.time}</span>
             <div class="article">
                 <p>${text.chat}</p>
             </div>
             <button type="button" class="reply">Reply</button>
         </div> 
         <button type="button"  class="cmt_heart toggle">
             <span class="num">2</span>
         </button> 
       </li>
       `
    })

    dep1.innerHTML = html;
    
    getCount() 
  }

  cmtForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addItem();
    console.log(textList)
  })

  function getStorage() {
    let strList = localStorage.getItem('dep1');
    if(!strList) {
      return [];
    }else {
      return JSON.parse(strList);
    }
  }

  function getValue() {
    let num = getNum()
    let chat = msg.value
    let name = names[num]
    let photo = `./images/photo/profile_${num}.jpg`
    let time = timeStamp();
    return [chat,name,photo,time]
  }

  function addItem() {
    getStorage();
    let  [ chat, name, photo,time] =  getValue();
    textList.push({
      name: name,
      chat: chat,
      photo: photo,
      time: time
    })
    localStorage.setItem('dep1', JSON.stringify(textList))
    console.log('textList ;',textList)
    printList();
    msg.value = '';
  }



  function resetAll() {
    localStorage.clear();
    dep1.innerHTML = '';
    msg.value = '';
  }
  reset.addEventListener('click', resetAll)

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
  if( !post ) {
    return false;
  }
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



const login = () => {
  const login = document.forms.loginForm;
  if(!login) return false;
  const userId = login.userId;
  const userPw = login.userPw; 
  login.addEventListener('submit',(e) => {
    e.preventDefault(); 
    let success = validateLogin();
    console.log(success)
    if(!success)  {
      resetAll();
      userId.focus();
      userId.style.outline = '2px solid red';
      return false;
    } 
    window.location.href = './home.html';
  })
  function validateLogin() {
    const id = 'suhyun';
    const pw = '1234';
    let checkInfo = userId.value === id && userPw.value === pw;
    return checkInfo ? true : false; 
  }

  function resetAll() {
    userId.value ='';
    userPw.value='';
  }
  
}


//로그인 버튼을 클릭했을떼 아이디와 비번이 맞는지 확인하고 맞으면 이동하게 한다 
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
login();
// modalReply();

top_modal();
modal_chat();
// modal_ham();