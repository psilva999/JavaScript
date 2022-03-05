//prototype é um objeto adicionado a uma função quando a mesma é criada
function Love(none, more) {
  this.nenhum = none
  this.more = more
}

const natural = new Love(0, 1000)

console.log(Love.prototype, natural.prototype)
//Retorna o objeto e undefined respectivamente

//É possível adicionar novas propriedades e métodos ao objeto prototype
console.log(Love.prototype.more)

//O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. 
//O novo objeto acessa os métodos e propriedades do protótipo utilizando a propriedade __proto__. É papel da engine fazer essa busca, não devemnos falar com __proto__ diretamente

//Herança de protótipo
//O objeto possui acesso aos métodos e propriedades do constructor prototype responsável por criar o objeto. 

function Teste(cry) {
  this.cry = cry

  console.log(this.cry)
}

const taltal = new Teste(20)

Teste.prototype
taltal.toString()
taltal.isPrototypeOf()
taltal.valueOf()

//Construtores Nativos
//Objetos, funções, números, strings e outros tipos de dados são criados utilizando construtores. Os mesmos possuem um protótipo com propriedades e métodos, que poderão ser acessados pelo tipo de dado

const planeta = 'terra',
      country = new String('Brasil')

planeta.charAt(0)
country.charAt(0)

String.prototype

//É possível acessar a função do protótipo
//É comum em códigos mais antigos o uso direto de funções do protótipo de construtor Array
const lista = document.querySelectorAll('li'),
      listaArray = Array.prototype.slice.call(lista),
      arrayFrom = Array.from(lista)

//Métodos do objeto x protótipo
//Nos objetos nativos existem métodos linkados diretamente ao objeto e outros linkados ao protótipo

//Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array)
Object.getOwnPropertyNames(Array.prototype)
//dado.constructor.name -- retorna o nome do construtor

console.log(lista)

//Apenas os métodos do protótipo são herdados
// [1, 2, 3].slice()//existe
// [1, 2, 3].from()//não existe

//SEMPRE ENTENDA O QUE ESTÁ SENDO RETORNADO
//Os métodos e propriedades acessado com o ponto são referentes ao tipo de dados que é retornado antes desse ponto

const livro = {
  cornwell: 'O arqueiro',
  price: 40,

  vender() {
    return true
  }
}

livro.cornwell //string
livro.price //number

livro.vender //function
livro.vender() //boolean

// livro.vender.charAt(0) //string
//O IMPORTANTE É O RESULTADO FINAL QUANDO CHAMAMOS ALGUM RESULTADO

// Crie uma função construtora de Pessoas
function People(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

People.prototype.infosPessoa = () => {
  return `${this.nome} ${this.sobrenome} tem ${this.idade} anos de idade`
}

const vem = new People('Guts', 'Da Silva', 42),
      vai = new People('Caska', 'Da Silva', 38)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //Li element
li.click; //function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String

//Document - função que constrói o objeto document
//document - o próprio objeto