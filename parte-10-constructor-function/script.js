//Constructor Functions
//Funções construtoras que são responsáveis pela construção de novos objetos 
//É recomendado utilizar o modo de escrita Pascal para indicar que seja uma constructor Function

function FirstConstructor() {
  this.batman = 'Bale'
  this.mdb = 10

  console.log(this.batman, this.mdb)
}

const movie = new FirstConstructor()
console.log(movie.batman = 'Christian', movie.mdb = 10)

const pelicula = new FirstConstructor()
console.log(pelicula.batman = 'Chistian Bale', pelicula.mdb = 1000)

//a chave 'new' cria um novo objeto baseado na função que passarmos a frente dela
// const books = new autor()

// //novo objeto
// books = []

// //protótipo
// books.prototype = Livro.prototype

// //Aponta a variável this para o objeto
// this = books

// //Executa a função, substituindo this pelo objeto
// books.tipo = 'Biografia'
// books.volumes = '10'

//retorna o novo objeto
// return books = {
//   tipo = 'Biografia',
//   volumes = '10'
// }

function SecondConstructor(first, second) {
  this.tal = first
  this.teu = second
}

const exata = new SecondConstructor(33, 44)

console.log(exata.tal, exata.teu)

//variáveis dentro do constructor estão protegidas
function Exercicios(cardio, porSemana) {
  this.porDia = 1

  this.cardio = cardio
  this.porSemana = porSemana
}

const crescer = new Exercicios('CARDIO', 5)

console.log(`Faça ${crescer.cardio} pelo menos ${crescer.porSemana} vezes por semana`)

//Exemplo
function ManipulaDom(seletor) {
  document.querySelectorAll(seletor).forEach(modo => modo.classList.add('ativo')) 
} 

const li = new ManipulaDom('li'),
      p = new ManipulaDom('p')

//Exercícios
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(person, age, passos) {
  this.nome = person
  this.idade = age
  this.passos = passos

  console.log(`${this.nome} de ${this.idade} anos deu ${this.passos} passos`)
}

const tal = new Pessoa('Guts', 42, 32)