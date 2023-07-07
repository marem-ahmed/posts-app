let inputs=document.querySelectorAll(".inputup");
let Name=document.getElementById("name")
let email=document.getElementById("email");
let password=document.getElementById("password")
let roll=document.getElementById("roll")
 let btn=document.getElementById("btn").addEventListener("submit",submit)



var info= [];

function submit(){

    if (inputs != " " && reg() == true ){
    let inf={
    name:Name.value,
    email:email.value,
    password:password.value,
    roll:roll.value
}
     info.push(inf)
    localStorage.setItem("information", JSON.stringify(info));


 }
}
 function reg(){
    let regex=/[a-z A-Z ]/
    let regex2=/^[a-z A-Z ][0-9][0-9]@ [gmail yahoo].com$/
    let regex3=/[0-9]{8}/
    let regex4=/(admin|user)/
    if( regex.test(Name.value)==true &&regex2.test(email.value)==true&& regex3.test(password.value)==ture&& regex4.test(roll.value)==true){
        return true
    }
    else{
        return false
    }
 }