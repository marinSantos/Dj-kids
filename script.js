alert('Feliz natal e boas festas! 🎅✨')
//Deixa a cor de fundo do header transparente
window.onscroll = function() {transparent()}

function transparent() {
  
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "transparent"
  } else {
    document.getElementById("header").className = ""
  }
}

//Ativa o menu escondido
function visible(){
 let menuEscondido = document.getElementById('menuEscondido')
 menuEscondido.style.display = 'grid'
}
function noVisible(){
  let menuEscondido =  document.getElementById('menuEscondido')
  menuEscondido.style.display = 'none'
}
document.getElementById('menuEscondido').addEventListener('mouseover',visible)
document.getElementById('menuEscondido').addEventListener('mouseout',noVisible)
document.getElementById('menu').addEventListener('mouseover',visible)
document.getElementById('menu').addEventListener('mouseout',noVisible)


function miniMenuOn(){
  const body = document.getElementById('body')
  if(body.className == 'bodyOn' ){
    body.className = 'bodyOf'
  }else{
    body.className = 'bodyOn'
  }
  
 
}


