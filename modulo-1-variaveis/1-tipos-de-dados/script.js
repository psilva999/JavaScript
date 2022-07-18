document.body.style.fontFamily = 'sans-serif'
document.body.style.color = '#272727'
document.body.style.background = '#E2E2E2'

const div = document.querySelector("div"),
      nome = 'Pedrosa' //string

let idade = 23, //Number
    possuiCurso = true, //Boolean
    time //undefined

let comida = null, //null
    simbolo = Symbol(), //Symbol
    novoObjeto = {} //Object

div.innerHTML = `EX: ${ nome } é do tipo <strong>${ typeof nome }</strong>`

//Procure utilizar a intepolação (template string) no lugar da concatenação no seu código

//Exercícios
const telescopio = 'James Webb',
      anoLancado = '2021'

let minhaIdade = 23

const meuNome = 'Pedrosa',
      sobrenome = 'Da Silva'

div.innerHTML += `<br> ${ meuNome } ${ sobrenome }`

div.innerHTML += `<br> It's a number`

div.innerHTML += `<br> ${ meuNome } é do tipo <strong>${ typeof meuNome }</strong>`
