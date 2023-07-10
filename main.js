let btn = document.getElementById('btn').addEventListener('click', signup)

var info = []
var regex = {
  name: /[a-z A-Z ]/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /[a-zA-Z0-9]{6,22}/,
  roll: /(admin|user)/,
}
if (localStorage.getItem('informations')) {
  info = JSON.parse(localStorage.getItem('informations'))
}



function signup() {
  let inputs = document.querySelectorAll('.inputup')
  let Name = document.getElementById('name')
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  let roll = document.getElementById('roll')
  let error = valid(inputs, regex)
  if (!error && searchdata) {
    let inf = {
      name: Name.value,
      email: email.value,
      password: password.value,
      roll: roll.value,
    }
    info.push(inf)
    localStorage.setItem('informations', JSON.stringify(info))

  }


}

function searchdata(){
  for(let i=0;i<=info.length;i++){
  if(info[i].email==email.value){
  alert("error")
  return true
}



}}
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
let btn2=document.getElementById("btn2").addEventListener("click",login)


function login(email,password){
  for(let i=0;i<info.length;i++){
    if (info[i].email == email.value && info[i].password == password.value){
      alert("sucess")
    }else{
      alert('email or password is wrong')
    }
  }
}

















