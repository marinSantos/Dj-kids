
alert('Atualização: \n\n-Para uma melhor praticidade realoquei as sessões de maior importância e usabilidade para o topo da página.\n\n-Melhorias no desing da tebela de pagamentos.')
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
const bola = document.getElementById('bola')
const cheeck = document.getElementById('cheeck')

pause.addEventListener('click', ball)

function ball() {
  if (bola.className == 'bolaDesactive') {
    cheeck.className = 'checkActive'
    bola.className = 'bolaActive'
    pause.addEventListener('click', addEv())
  } else {
     cheeck.className = 'checkDesactive'
    bola.className = 'bolaDesactive'
    pause.addEventListener('click', reloadDj())
  }
}

function reloadDj() {
  a1.removeEventListener('play', a1ev)
  a2.removeEventListener('play', a2ev)
  a3.removeEventListener('play', a3ev)
  a4.removeEventListener('play', a4ev)
  a5.removeEventListener('play', a5ev)
  a6.removeEventListener('play', a6ev)

}


function a1ev() {
  a2.pause()
  a3.pause()
  a4.pause()
  a5.pause()
  a6.pause()
}
function a2ev() {
  a1.pause()
  a3.pause()
  a4.pause()
  a5.pause()
  a6.pause()
}
function a3ev() {
  a2.pause()
  a1.pause()
  a4.pause()
  a5.pause()
  a6.pause()
}
function a4ev() {
  a2.pause()
  a3.pause()
  a1.pause()
  a5.pause()
  a6.pause()
}
function a5ev() {
  a2.pause()
  a3.pause()
  a4.pause()
  a1.pause()
  a6.pause()
}
function a6ev() {
  a2.pause()
  a3.pause()
  a4.pause()
  a5.pause()
  a1.pause()
}

function addEv() {

  a1.addEventListener('play', a1ev)
  a2.addEventListener('play', a2ev)
  a3.addEventListener('play', a3ev)
  a4.addEventListener('play', a4ev)
  a5.addEventListener('play', a5ev)
  a6.addEventListener('play', a6ev)
}


const link = document.getElementById('linkYoutube')
const enviar = document.getElementById('enviar')
const youtube = document.getElementById('youtube')
const original = document.getElementById('original')

enviar.addEventListener('click',function(ev){
  ev.preventDefault()

  
  let pesquisa = link.value
  youtube.src = "https://www.youtube.com/embed/"+pesquisa
  link.value = ''
})


//Scroll automático

const logo = document.getElementById('logo')

logo.addEventListener('click',function(){
  window.scroll(0,0)
})







