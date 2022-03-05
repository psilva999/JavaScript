//outerHTML -- mostra todo o html do elemento
//innerHTML -- html interno
//innerText -- texto sem tags

//traversing -- navegar pelo DOM
const teste = document.querySelector('.teste')

//Mostra o elemento pai
console.log(teste.parentElement)

//Mostra o pai do pai
console.log(teste.parentElement.parentElement)

//Elemento acima
console.log(teste.previousElementSibling)

//Elemento abaixo
console.log(teste.nextElementSibling)

//mostra os filhos
const ol = document.querySelector('ol')

console.log(ol.children)

//Mostra o último filho
console.log(ol.children[--ol.children.length])

//Element's representam uma tag HTML. 
//Node representa um nó (texto, comentário, quebra de linha e assim por diante)

//Elemento acima
console.log(teste.previousSibling)

//Node acima
console.log(teste.previousSibling)

//Primeiro node child
console.log(teste.firstChild)

//Todos os node child
console.log(teste.childNodes)

//Manda a tag pro final do container
document.querySelector('article').appendChild(document.querySelector('article h1'))

//troca os filhos
document.querySelector(".insert-before").insertBefore(document.querySelector('.insert-before h2'), document.querySelector('.insert-before h1'))

//remove a tag
document.querySelector('.remove-child').removeChild(document.querySelector('.remove-child h5'))

//substitui as tags
document.querySelector('.replace-child').replaceChild(document.querySelector('.replace-child h1'), document.querySelector('.replace-child h2'))

const elemento = document.querySelector('.cria-elemento'),
      tag = document.createElement('li')

tag.innerText = 'a criação'

elemento.appendChild(tag)

//é possível clonar elementos utilizando cloneNode()
const clone = document.querySelector(".clona-elemento").cloneNode(true)

document.body.appendChild(clone)