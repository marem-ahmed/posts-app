let btn = document.getElementById('btn').addEventListener('click', signup)
var info = []
var regex = {
  name: /[a-z A-Z ]/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /[a-zA-Z0-9]{6,22}/,
  roll: /(admin|user)/,
}
if (localStorage.getItem('information')) {
  info = JSON.parse(localStorage.getItem('information'))
}

console.log(info)

function signup() {
  let inputs = document.querySelectorAll('.inputup')
  let Name = document.getElementById('name')
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  let roll = document.getElementById('roll')
  let error = valid(inputs, regex)
  if (!error) {
      let inf = {
        name: Name.value,
        email: email.value,
        password: password.value,
        roll: roll.value,
      }
      info.push(inf)
      localStorage.setItem('information', JSON.stringify(info))
    
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
