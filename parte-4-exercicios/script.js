//Exercício 1
document.querySelectorAll('.teste').forEach(link => link.onclick = padrao)

function padrao(modo) {
  modo.preventDefault()
  console.log(modo.currentTarget.href)
}

//Exercício 2
//Seleciona todos os itens presentes no body
document.querySelector('body *').addEventListener('click', seleciona_tag)

function seleciona_tag(modo) {
  console.log(modo.target)
}

//Exercício 3
document.querySelectorAll('li').forEach(modo => modo.addEventListener('click', retiraLista))

function retiraLista(li) {
  li.currentTarget.remove()
}

addEventListener('keydown', modo => {
  let fonte = 2

  if (modo.key === 't') {
    fonte++

    document.querySelector('body *').style.fontSize = `${fonte}rem`
  }
})