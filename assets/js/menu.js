

let botãomenu = document.getElementById('botão-abrir')
let menu = document.getElementById('menu-mobile')
let overlaey = document.getElementById('overlay-menu')

botãomenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
overlaey.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
