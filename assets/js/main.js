


if(localStorage.getItem('login')){

 let data = JSON.parse(localStorage.getItem('login'));
  if (data.roll == 'user') {
    let dash = document.getElementById('dash')
    if (dash) {
      dash.style.display = 'none'
    }
  }
}

let btn = document.getElementById('btn');
let mood = 'add';
let fix;
if (btn) {
  btn.addEventListener('click', signup);
}
var info = []
if (localStorage.getItem('informations')) {
  info = JSON.parse(localStorage.getItem('informations'))
} else {
  info = []
}
let Name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let roll = document.getElementById('roll')
var regex = {
  name: /[a-z A-Z ]/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /[a-zA-Z0-9]{6,22}/,
  roll: /(admin|user)/,
}

function searchdata(email) {
  let error = false
  info.forEach((data) => {
    if (data.email == email) {
      error = true
    }
  })
  return error
}

function signup() {
  let inputs = document.querySelectorAll('.inputup')

  let error = valid(inputs, regex)
  if (!error) {
    if (!localStorage.getItem('informations')) {
      let inf = {
        name: Name.value,
        email: email.value,
        password: password.value,
        roll: roll.value,
      }
      info.push(inf)
      let data={
        email: email.value,
        roll: roll.value
      }
      localStorage.setItem('login',JSON.stringify(data) )
      window.location.replace("index.html");
      localStorage.setItem('informations', JSON.stringify(info))
    } else {
      if (!searchdata(email.value)) {
        let inf = {
          name: Name.value,
          email: email.value,
          password: password.value,
          roll: roll.value,
        }
        info.push(inf)
        let data={
          email: email.value,
          roll: roll.value
        }
        localStorage.setItem('login',JSON.stringify(data) )
        window.location.replace("index.html");
        localStorage.setItem('informations', JSON.stringify(info))
      } else {
        alert('email is already registered')
      }
    }
  }
}

function valid(inputs, regex) {
  let error = false

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]
    if (input.value.length == 0) {
      input.nextElementSibling.textContent = `${input.name} is empty`
      error = true
    } else if (!regex[input.name].test(input.value)) {
      input.nextElementSibling.textContent = `${input.name} is not a valid`
      error = true
    } else {
      input.nextElementSibling.textContent = ''
    }
  }
  return error
}

var btn2 = document.getElementById('btn2')
if (btn2) {
  btn2.addEventListener('click', login)
}

function login() {

  let inputs = document.querySelectorAll('.inputin')
let email = document.getElementById('logEmail')
let password = document.getElementById('logPassword')
let roll = document.getElementById('logroll')
  let error = valid(inputs, regex)
  let success = false
  if (!error) {
    for (let i = 0; i < info.length; i++) {
      if ( info[i].email == email.value && info[i].password == password.value && info[i].roll == roll.value) {
        success = true
      }
    }

    if (success) {
      let data={
        email: email.value,
        roll: roll.value
      }
      localStorage.setItem('login',JSON.stringify(data))
      window.location.replace("index.html");

    } else {
      alert('failed')
    }
    return success
  } 
}
let btn3 = document.getElementById('btn3')
let Inputs = document.querySelectorAll('.inputs')
let Title = document.getElementById('title')
let Content = document.getElementById('content')
if (btn3) {
  btn3.addEventListener('click', addPost)
}
let posts = []
if (localStorage.getItem('post') != null) {
  posts = JSON.parse(localStorage.getItem('post'))
  display()
}
function addPost(e) {
  e.preventDefault()

  let dataPost = {
    Title: Title.value,
    Content: Content.value,
  }
  posts.push(dataPost)
  localStorage.setItem('post', JSON.stringify(posts))
  display()
  clear()
}

function clear() {
  Title.value = ' '
  Content.value = ' '
}

function display() {
  let cartona = ``
  let conter = ``
  for (let i = 0; i < posts.length; i++) {
    conter += `<div class="card m-4" style = "width: 18rem;" >
          <img class="card-img-top" src = "assets/post.webp" alt="Card image cap">
          <div class="card-body">
            <h2>${posts[i].Title}</h2>
            <p class="card-text">${posts[i].Content}</p>
            </div>
        </div>`
              
    cartona += `  <tr>
    <td>${i} </td>
    <td>${posts[i].Title}</td>
    <td>${posts[i].Content}</td>
    <td><button class="bg-warning border-0 text-white rounded-1"onclick="upDate(${i})" >Update</button></td>
    <td><button class="bg-danger border-0 text-white rounded-1" onclick="Delete(${i})">delete</button></td>
  </tr>
   
   
   
  `
  }
  if (document.getElementById('container')) {
    document.getElementById('container').innerHTML = conter
  }
  if (document.getElementById('ttbody')) {
    document.getElementById('ttbody').innerHTML = cartona
  }
}

function Delete(i) {
  posts.splice(i, 1)
  localStorage.setItem('post', JSON.stringify(posts))
  display()
}
let btn4 = document.getElementById('btn4')

if (btn4) {
  btn4.addEventListener('click', edit)
}
function upDate(i) {

  fix = i
  Title.value = posts[fix].Title
  Content.value = posts[fix].Content
  btn3.style.display = 'none'
  btn4.style.display = 'flex'
}
function edit() {
  posts[fix].Title = Title.value
  posts[fix].Content = Content.value
  localStorage.setItem('post', JSON.stringify(posts))
  display()
}
let icon=document.getElementById("icon");
if(icon){
  icon.addEventListener("click",()=>{
    document.getElementById("menu").classList.toggle("active")
  })
}