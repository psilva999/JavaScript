const h1 = document.querySelector('h1')
h1.style.background = 'red'
h1.style.fontFamily = 'Calibri'

//eventos
function callback(modo) {
  console.log(modo.type, modo)
}

//Tamanho da aba
window.addEventListener("resize", callback)

window.pageYOffset //Distância total do scroll horizontal
window.pageXOffset //scroll vertical
console.log(h1.offsetTop) //distância entre o topo do elemento e o topo da página

//voltar pra funcionar
addEventListener('scroll', () => {
  
})

document.querySelectorAll("li").forEach((modo) => modo.className = 'blueviolet')

li.className
li.className = 'azul'