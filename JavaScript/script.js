//Base: MDN

console.log('Hello World!')
console.error('This is an error')
console.warn('This is a warning')

// var, let, const --Entender
// Duas variáveis não pode ter o mesmo nome quando utilizamos 'var'
let idade = 22
console.log(`Idade: ${idade}`)

idade = 23
console.log(`Nova idade: ${idade}`)

const andares = 11
console.log(`Andares: ${andares}`)

//Mostra erro
// andares = 12
// console.log(andares)
//Utilize const para valores que não serão modificados ao longo do processo

//Mostra erro
// const pontos
// pontos = 9
// console.log(pontos)

// Datatypes: String, Numbers, Boolean, null, undefined

const nome = 'Wanderson'
const age = 22

const rating = 5.2
const human = true

const x = null
const y = undefined

let z

//Não entendi esse traço
console.log(`Para nomes: ${typeof nome}`)
console.log(`Para números: ${typeof age}`)

console.log(`Para boolean: ${typeof human}`)
console.log(`Para objeto: ${typeof x}`)

console.log(`Para indefinido: ${typeof y}`)
console.log(`Para variáveis vazias: ${typeof z}`)

//Concatenação
console.log('Meu nome é ' + nome + ', tenho ' + age + ' anos')

//Template String ou Interpolação
console.log(`Meu nome é ${nome}, tenho ${age} anos`)

//Quantidade de caracteres
const p = 'Hello World!'
console.log(p.length)

//Maiúscula e minúscula respectivamente
console.log(p.toUpperCase())
console.log(p.toLowerCase())

//Digita somente até determinado caractere
console.log(p.substring(0, 5)) //Retorna 'Hello'

//Retorna as letras separadas
console.log(p.split(''))

//Retorna todas as palavras
const teste = 'tecnologia, computador, codigo, gambiarra'
console.log(teste.split(', '))

/* Arrays - variáveis com multiplos valores */
const numbers = new Array(1, 3, 5, 7, 11)

//Pega o primeiro valor do array
console.log(numbers[0])

//Coloque strings, numbers e boolean
const estados = ['Pernambuco', 'Acre', 51, true]

console.log(estados[2])

//Adiciona um novo valor
console.log(estados[4] = 'Florida')
//Procure utilizar constantes nos arrays

//Adicionar valor com push
console.log(estados.push('São Paulo'))

//Coloca no inicio
console.log(estados.unshift('Minas Gerais'))

console.log(estados)

//Passa o ultimo valor do array
console.log(estados.pop())

//
console.log(Array.isArray("hello"))

//Posição do valor
console.log(estados.indexOf('Florida'))

//Objeto
const person = {
   primeiroNome: 'Wanderson',
   sobreNome: 'Pedrosa',

   idade: 22,
   times: ['Manchester United', 'Palmeiras', 'Sport'],

   peso: {
      kilos: 62,
      emGramas: 6200
   }
}

console.log(person)

console.log(person.times[0], person.times[1])

console.log(person.peso.kilos)

const { primeiroNome, sobreNome, peso: {emGramas}} = person
console.log(emGramas)

//Adicionar valores no objeto
person.id = '@psilva999'
console.log(person.id) 

//Array com objetos
const tudo = [
   {
      id: 2,
      texto: 'OIA',
      completado: true
   },

   {
      id: 6,
      texto: 'ELE',
      completado: false
   },

   {
      id: 12,
      texto: 'AI',
      completado: true
   }
]

console.log(tudo)

console.log(tudo[0].texto, tudo[1].texto, tudo[2].texto)

//Converter para JSON
const forJson = JSON.stringify(tudo)
console.log(forJson)

//for
for (let i = 0; i <= 3; i++) {
   console.log(i)

   if (i == 3) {
      console.log('ACABOU')
   }
}

//while 
let i = 0
while (i < 3) {
   i++

   console.log(`Dou-lhe ${i}`)
   if (i == 3) {
      console.log("Vendido!")
   }
}

//for mais simples
for (let teste of tudo) {
   console.log(teste.id)
}

//forEach
tudo.forEach(function(teste) {
   console.log(teste.texto)
})

//map
const textoDeTudo = tudo.map(function(teste) {
   return teste.texto
})

console.log(textoDeTudo)

//filter
const testeDeFilter = tudo.filter(function(teste) {
   return teste.completado === true
})

console.log(testeDeFilter)

//Poderoso (não sei o motivo mas consigo perceber)
const mapFilter = tudo.filter(function(teste) {
   return teste.completado === true

}).map(function(teste) {
   return teste.texto
})

console.log(mapFilter)

/*Condicionais*/

//if
const tal = 19
const teu = 2

if (tal === 9) {
   console.log(`tal é igual a ${tal}`)
}

else if (tal > 9) {
   console.log(`tal é maior que 9, vale ${tal}`)
}

else {
   console.log(`tal vale ${tal} e é menor que 9`)
}

if (tal < 10 || teu < 10) {
   console.log(`Menos que 10`)
}

if (tal > 10 && teu < 9) {
   console.log(`'tal' é maior que 10 enquanto 'teu' é menor`)
}

//Shorthand switch
const incrivel = 314
const color = incrivel > 314 ? 'black' : 'orange'

console.log(color)

switch(color) {
   case 'black':
      console.log('The color is black')
      break
   
   case 'orange': 
      console.log("The color is orange")
      break

   default:
      console.log('The is not black or orange')
      break
}

//functions
function addNumbers(n1, n2) {
   return n1 + n2
}
console.log(addNumbers(2, 4))

//NaN is Not a Number
//Utilizando constantes
const addWords = (n1, n2) => n1 + n2
console.log(addWords('The ', 'Batman'))

//Só com um parametro
const addUmParametro = p1 => p1 + ' Ironman'
console.log(addUmParametro('I am'))

tudo.forEach((teste) => console.log(teste))

//Constructor function
function linguagens(javascript, java, python, time) {
   this.javascript = javascript
   this.java = java

   this.python = python
   this.time = new Date(time)

   this.getDay = function() {
      return this.time.getFullYear()
   }

   this.getLinguagem = function() {
      return `${this.javascript} - ${this.java}`
   }
}

linguagens.prototype.getDay = function() {
   return this.time.getFullYear()
}

linguagens.prototype.getLinguagem = function() {
   return `${this.javascript} --- ${this.java}`
}

//class
class futebol {
   constructor(javascript, java, python, time) {
      this.javascript = javascript
      this.java = java
      
      this.python = python
      this.time = new Date(time)
   }

   getDay() {
      return this.time.getFullYear()
   }

   getLinguagem() {
      return `${this.javascript} --- ${this.java}`
   }
}

//Instantiate object
const language1 = new linguagens('front-end', 'back-end', 'dados', '11/12/2015')
const language2 = new linguagens('front', 'back', 'data', '11/12/2025')

console.log(language1.javascript)
console.log(language1.time.getFullYear())

console.log(language1.getDay())
console.log(language1.getLinguagem())

console.log(language2.getLinguagem())
console.log(language1.getDay())

/*DOM - Document Object Model*/

//Single element
const form = document.querySelector('#formulario')

console.log(form) //Só funciona no browser

//Multiple element
console.log(document.querySelectorAll('.item'))

const items = document.querySelectorAll(".item")

items.forEach((item) => console.log(item))

const ul = document.querySelector('.items')

ul.remove()
ul.lastElementChild.remove()

ul.firstElementChild.textContent = 'HEYY'
ul.children[1].innerText = 'HEITOR'
ul.lastElementChild.innerHTML = '<h1>White Christmas</h1>'

const btn = document.querySelector(".btn")
btn.style.background = 'red'

btn.onclick = (p) => {
   p.preventDefault()

   btn.style.background = 'orange'
   console.log('click')

   console.log(p.target.className)

   document.querySelector(".items").lastElementChild.innerHTML = '<h1>Guts</h1>'
}

const meuForm = document.querySelector("#formulario")
const nomeUser = document.querySelector("#name")

const email = document.querySelector("#email")
const msg = document.querySelector(".msg")

const users = document.querySelector("#users")

meuForm.onsubmit = (e) => {
   e.preventDefault

   console.log(nomeUser.value)

   if (nomeUser.value === '' || email.value === '') {
      msg.innerHTML = 'Insira pelo menos um caractere'

      setTimeout(() => msg.remove(), 2000)
   }

   else {
      msg.innerHTML = 'Sucesso'

      const li = document.createElement('li')
      li.appendChild(document.createTextNode(`${nomeUser.value} -- ${email.value}`))

      users.appendChild(li)
   }

   //Clear fields
   nomeUser.value = ''
   email.value = ''
}