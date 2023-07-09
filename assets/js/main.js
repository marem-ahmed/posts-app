let btn = document.getElementById('btn').addEventListener('click', signup)
var info = []
if (localStorage.getItem('informations')) {
  info = JSON.parse(localStorage.getItem('informations'))
}else{info=[]}
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
  let error=false;
  info.forEach((data) => {
    if (data.email == email) {
      console.log(data,true);
      error=true;

    }
  })
  return error;
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






















