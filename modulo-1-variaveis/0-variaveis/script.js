document.body.style.fontFamily = 'sans-serif'
document.body.style.color = '#272727'
document.body.style.background = '#E2E2E2'

const div = document.querySelector("div")

//Posso declarar uma variável sem valor
let curso

var nome = 'Silva'

let idade = 23

const possuiCurso = true

div.style.marginTop = '1rem'
div.innerHTML = `EX: ${ nome }, ${ idade } anos `

if (possuiCurso === true) {
  curso = 'possui curso (normal)'
  div.innerHTML += `e ${ curso }`
}

else {
  curso = 'não possui curso'
  div.innerHTML += `e ${ curso }`
}

//Posso utilizar vírgulas no lugar de várias 'let' ou 'const'
let preco = 20,
    quantidade = 5,
    precoTotal = preco * quantidade

div.innerHTML += `<br> preço final: ${ precoTotal }`

//Hoisting 
const hoistingDemonstrado = document.querySelector('.hoisting')

// da erro
// hoistingDemonstrado.innerHTML = `Tamanho do universo é ${ universo }`

const universo = 'incalculável'

hoistingDemonstrado.innerHTML += `EX: o Tamanho do universo é <strong>${ universo }</strong>`

//valor atribuído
let tipo = 'humano'
console.log(tipo)

tipo = 'cão'
console.log(tipo)

//da erro com const

//Exercício
const meuNome = 'Pedrosa'

let minhaIdade = 23,
    comidaFav

comidaFav = 'Batata doce, frango e salada | banana com aveia'

let tipoCima,
    tipoBaixo,
    
    tipoLado,
    tipoFora
