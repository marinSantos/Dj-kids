
//Deixa a cor de fundo do header transparente
window.onscroll = function () { transparent() }

function transparent() {

  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "transparent"
  } else {
    document.getElementById("header").className = ""
  }
}
//Ativa o menu escondido
function visible() {
  let menuEscondido = document.getElementById('menuEscondido')
  menuEscondido.style.display = 'grid'
}
function noVisible() {
  let menuEscondido = document.getElementById('menuEscondido')
  menuEscondido.style.display = 'none'
}
document.getElementById('menuEscondido').addEventListener('mouseover', visible)
document.getElementById('menuEscondido').addEventListener('mouseout', noVisible)
document.getElementById('menu').addEventListener('mouseover', visible)
document.getElementById('menu').addEventListener('mouseout', noVisible)

//Menu mobile

function miniMenuOn() {
  const mobile = document.getElementById('navMobile')

  mobile.classList.toggle('active')

}



const pause = document.getElementById('autoPause')
const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a3 = document.getElementById('a3')
const a4 = document.getElementById('a4')
const a5 = document.getElementById('a5')
const a6 = document.getElementById('a6')



function addEv() {

  a1.addEventListener('play', a1ev)
  a2.addEventListener('play', a2ev)
  a3.addEventListener('play', a3ev)
  a4.addEventListener('play', a4ev)
  a5.addEventListener('play', a5ev)
  a6.addEventListener('play', a6ev)
}
addEv()



function a1ev() {
  a2.pause()
  a3.pause()
  a4.pause()
  a5.pause()
  a6.pause()

  a2.myAudio.currentTime = 0
  a3.myAudio.currentTime = 0
  a4.myAudio.currentTime = 0
  a5.myAudio.currentTime = 0
  a6.myAudio.currentTime = 0
}
function a2ev() {
  a1.pause()
  a3.pause()
  a4.pause()
  a5.pause()
  a6.pause()

  a1.currentTime = 0
  a3.currentTime = 0
  a4.currentTime = 0
  a5.currentTime = 0
  a6.currentTime = 0

}
function a3ev() {
  a2.pause()
  a1.pause()
  a4.pause()
  a5.pause()
  a6.pause()

  a2.currentTime = 0
  a1.currentTime = 0
  a4.currentTime = 0
  a5.currentTime = 0
  a6.currentTime = 0
}
function a4ev() {
  a2.pause()
  a3.pause()
  a1.pause()
  a5.pause()
  a6.pause()

  a2.currentTime = 0
  a3.currentTime = 0
  a1.currentTime = 0
  a5.currentTime = 0
  a6.currentTime = 0
}
function a5ev() {
  a2.pause()
  a3.pause()
  a4.pause()
  a1.pause()
  a6.pause()

  a2.currentTime = 0
  a3.currentTime = 0
  a4.currentTime = 0
  a1.currentTime = 0
  a6.currentTime = 0
}
function a6ev() {
  a2.pause()
  a3.pause()
  a4.pause()
  a5.pause()
  a1.pause()

  a2.currentTime = 0
  a3.currentTime = 0
  a4.currentTime = 0
  a5.currentTime = 0
  a1.currentTime = 0
}




const link = document.getElementById('linkYoutube')
const link2 = document.getElementById('linkYoutube2')
const link3 = document.getElementById('pesquisa')
const enviar = document.getElementById('enviar')
const enviar2 = document.getElementById('enviar2')
const enviar3 = document.getElementById('enviar3')
const youtube = document.getElementById('youtube')
const original = document.getElementById('original')




enviar2.addEventListener('click', function (ev) {
  ev.preventDefault()

  let pesquisa = link2.value
  let slice = pesquisa.match(/.+\?v=/g)
  let result = pesquisa.replace(slice, "https://www.youtube.com/embed/")
  youtube.src = result
  link2.value = ''
})
let index = 0



let span = document.getElementById('span')

let data  = new Date()

span.innerText = data.getFullYear()

