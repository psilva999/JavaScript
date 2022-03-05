const teste = document.querySelectorAll('p')

//Acessa o primeiro elemento
console.log(teste[0])

//Mostrar o primeiro testo
console.log(teste[0].innerText)

//Mostra o link do a
console.log(document.querySelector('a').href)

//Atualiza quando adiciona um novo item
const testeHTML = document.getElementsByClassName('segunda-parte')
console.log(testeHTML)

//Mantém o inicial 
const testeNode = document.querySelectorAll('.segunda-parte')
console.log(testeNode)

/*Array-Like
HTMLCollection e NodeList são array-like. Parecem um array mas não são.

O método de array forEach() por exemplo só existe me NodeList

é possível transformar array-like em array real utilizando o método Array.from(teste)
*/ 

//For each para selecionar todos o elementos e aplicar funcionalidades aos mesmos
document.querySelectorAll('.imagem').forEach((tags) => console.log(tags.src))

//Retorna as imagens que começam com determinado caractere
console.log(document.querySelector('[src^="https://i.picsum.photos/id/249/536/354.jpg?"]').src)

//pegar ultimo filho -- teste[teste.length--]

//O primeiro parâmetro do forEach é o callback (função que será ativada para cada item). Em seguida temos o index (número do index) e array 

//Transformar um array-like em array
const exemploEach = document.querySelectorAll('.forEach')
const viraRay = Array.from(exemploEach)

//Quando temos somente um argumento, não é necessário utilizar parênteses
viraRay.forEach(modo => {
  console.log(modo)
})

//Utilize com 2 ou mais
viraRay.forEach((modo, index) => {
  console.log(modo, index)
})

//Caso nao tenha argumento, utilize o parênteses 

let bonecoDeTestes = 0
viraRay.forEach(() => {
  console.log(bonecoDeTestes++)
})

//Você pode encurtar dessa forma
viraRay.forEach(() => console.log(bonecoDeTestes*2))

//Arrow function -- encurta a function expression utilizando a fat arrow (=>)

bonecoDeTestes = 1
const arrowTeste = Array.from(teste)

arrowTeste.forEach(modo => {
  console.log(`Teste ${bonecoDeTestes++} - ${modo.innerText}`)
})

//Utilizando teste.classList.replace("esse", 'aquele') você troca a classe 'esse' por 'aquele'

//////

//Antigamente se utilizava teste.className

//attributes -- retorna um array-like com atributos de elemento
const atriTeste = document.querySelector(".atributos")

//nomenclatura
console.log(atriTeste.attributes.class, atriTeste.attributes[0], atriTeste.attributes)

//////

//Normalmente valor utilizar o getAttribute e setAttribute -- métodos que retornam ou definem de acordo com o atributo selecionado
console.log(atriTeste.getAttribute('class')) //retorna a classe

console.log(atriTeste.setAttribute('id', 'Solitary man')) //insere
console.log(atriTeste.setAttribute('alt', 'meuh'))

console.log(atriTeste.hasAttribute('id')) //Valor booleano
console.log(atriTeste.hasAttribute) //confere se tem algum atributo

console.log(atriTeste.removeAttribute('alt'))

//Height e Width -- propriedades e método dos objetos Element e HTMLElement

console.log(teste[0].clientHeight) //height + padding

console.log(teste[0].offsetHeight) //height + padding + border

console.log(teste[0].scrollHeight) //height total, mesmo dentro do scroll

//getBoundingClientRect() -- método que retorna um objeto com valores de width, height, distâncias de algum outro elemento e mais

const testeBounding = document.querySelector('.bounding').getBoundingClientRect()

console.log(testeBounding.height, testeBounding.top) // height do elemento e distancia entre o topo do elemento e scroll respectivamente


//matchMedia() -- estilo o media queries no CSS

const corpo = window.matchMedia('(max-width:700px)')

if (corpo.matches) {
  console.log('menor que 700px')
}

else {
  console.log('corpo maior que 700px')
}

//Distancias
const imgTop = document.querySelector('.exemplo-distancia').offeseTop

console.log(imgTop)

//O minimo para telas com touch deve ser 48px/48px

//É recomendado utilizar callback para manter o controle de funções dentro dos eventos dom
const pin = 'button'

pin.onclick = callback
function callback() {
  console.log('testando')
}

//target te entrega o elemento que você clicou
//currentTarget entrega o bloco completo
//type entrega o tipo de evento
document.querySelector('.target').onclick = callbackLista

function callbackLista(modo) {
  console.log(modo.currentTarget, modo.target, modo.type, modo.path)
}

//preventDefault() -- previne o comportamento padrão do evento no browser. Pode prevenir que um link seja ativado por exemplo

document.querySelector('.default').onclick = padrao

//utilize querySelectorAll('a[href^="#"]') para selecionar os elementos que comecem com '#'

function padrao(modo) {
  modo.preventDefault()
  console.log(modo.currentTarget.href)
}

//o this pode ser utilizado para fazer referência ao elemento em que o onclick foi adicionado
const maker = document.querySelector('.this')

maker.onclick = evento_this

function evento_this(modo) {
  modo.preventDefault()

  console.log(this.getAttribute('src'))
}

window.addEventListener('keydown', chaves)
function chaves() { console.log('teste') }


document.body.addEventListener("keyup", keyboard)
function keyboard(modo) {
  alert(modo.key)

  if (modo.key === 'q') {
    document.body.style.background = 'red'
  }

  else if (modo.key === 'p') {
    document.body.style.background = 'green'
  }
}

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


//EXERCÍCIOS

document.querySelector('.exercicios-dom').style.margin = '3rem'
document.querySelector(".exercicios-dom").style.display = 'grid'

document.querySelector(".exercicios-dom").style.gap = '.4rem'
document.querySelector(".exercicios-dom").style.textAlign = 'right'

document.querySelector('.exercicios-dom a').onclick = (modo) => {
  modo.preventDefault()
  alert('clicou')
}