alert('Olá, aqui é o Lucas ! Desenvolvedor deste guia...\n\nPeço para que por gentileza se ouve alguma mudança das regras, músicas, falas e demais informações disponíveis aqui, me manter informado no meu whatsapp "11976047647" \nPor mais que eu não esteja presente estarei a disposição, obrigado !\n\n\n obs: Esta mensagem vai permanecer por uma semana... ')

const miniMenu = document.getElementById('miniMenu')

function verticalMenu(){
  nav.classList.toggle('open')
}

miniMenu.addEventListener('click', verticalMenu)
miniMenu.addEventListener('toachstart', verticalMenu)


const mobile = document.getElementById('mobile')

function mobileMenu(){
  header.classList.toggle('active')
  body.classList.toggle('cinza')
}

mobile.addEventListener('click', mobileMenu)
mobile.addEventListener('toachstart', mobileMenu)

