let Name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let roll = document.getElementById('roll')
let btn = document.getElementById('btn').addEventListener('click', signup)

var info = []

let regex = {
  name: /[a-z A-Z ]/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /[0-9]{8}/,
  roll: /(admin|user)/,
}
function signup() {

  let inputs = document.querySelectorAll('.inputup')
  let error = valid(inputs, regex)
  if (!error) {
    if (localStorage.getItem('information')) {
        let data=JSON.parse(localStorage.getItem('information'))
        data.forEach(user => {
            if(user.email!=email.value){
                let inf = {
                    name: Name.value,
                    email: email.value,
                    password: password.value,
                    roll: roll.value,
                  }
                  info.push(inf)
                  localStorage.setItem('information', JSON.stringify(info))
            }else{
                email.nextElementSibling.textContent="asdasdasd"
            }
        });
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
return error;
}
//  if( regName.test(Name.value)==true &&regEmail.test(email.value)==true&& regpass.test(password.value)==ture&& regroll.test(roll.value)==true){
//     return true
// }
// else{
//     return false
// }
