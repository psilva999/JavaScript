const altera = {
  cobreTela: document.querySelector("[data-modal='cobre-tela']"),
  sectionDoLogin: document.querySelector('section')
}

document.querySelector("button").onclick = () => {
  altera.cobreTela.classList.toggle("active")
  altera.sectionDoLogin.style.display = 'grid'
}

altera.cobreTela.onclick = () => {
  altera.cobreTela.classList.toggle("active")
  altera.sectionDoLogin.style.display = 'none'
}

//Para adicionar um cobre tela onde o conteúdo ta dentro do mesmo
//Válido no on click
// if (event.target === this) {
// fecha o cobre tela  
//}