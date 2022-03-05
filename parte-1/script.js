
//novo tipo primitivo
let simbolo = Symbol() 

console.log(typeof pao)

//concatena
console.log('2' + 2)

console.log('esse 2' / 2)

//Calcula
console.log(+'2' + 2)

console.log('2' / 2)


//Incremento
let testando = 2
console.log(testando++) //mostra 2
console.log(testando) //mostra 3
 
console.log(++testando) //mostra 3
console.log(testando) //mostra 3

var gerei = 3

//veririfica se a variável existe
if (gerei) {
  console.log(`${gerei} existe`)
}

//procure utilizar === em condicionais
let arvore = 6

if (6 === arvore) {
  console.log(arvore * 2)
}

//!== sinal de diferente
if (!true) {
  console.log(arvore + 3)
}

else if (!!true) {
  console.log(arvore**2)
}

//switch case

let passo = 33

switch (passo) {
  case 30:
    console.log('aqui')
    break

  case 33:
    console.log("aliii")
    break

  default:
    console.log("nada")
}

//exercicio
let myAge = 22,
    myMom = 50

switch (myAge < myMom) {
  case myAge < myMom:
    console.log('É menor que a idade da minha mãe')
    break
  
  case myAge > myMom:
    console.log('É maior que o da minha mãe')
    break

  default:
    console.log('no result')
    break
}

let expressao = (5 - 2) && (5 - '') && (5 - 2)
console.log(expressao)

//Funções
function aprender(lado) {
  return lado * lado;
}

console.log(`O lado do quadrado é ${aprender(3)}`)

function pi() {
  return 3.14
}

console.log ((3 * pi()).toFixed(2))

//Retorna a função
console.log(pi)

//Função para tirar IMC
function imc(peso, altura) {
  const imc = peso / (altura ** 2)

  return `Seu IMC é: ${imc.toFixed(2)}`
}

console.log(imc(61, 1.70))

//Não precisa de parênteses em funções em eventos listener pois o evento já sabe que está chamando uma função

//Recomenda-se que uma função só retorne um tipo de dado (seja ele booleano, string ou number)

function idade(passa) {
  if (typeof passa !== 'number') {
    return 'Ta errado'
  }

  else if (passa >= 40) {
    return true
  }

  else {
    return false
  }
}

console.log(idade(42))

//Exercicios
function verificaTrueFalse(tal) {
  return !!tal
}
console.log(`tal tal: ${verificaTrueFalse(22)}`)

function calculaPerimetro(lado) {
  let perimetro = lado * 4

  return `O perímetro tem ${perimetro} metros`
}
console.log(calculaPerimetro(4))

function iGotName(nome, sobrenome) {
  const seuNome = `${nome} ${sobrenome}`

  return `Meu nome é ${seuNome}`
}
console.log(iGotName('Wanderson', 'Pedrosa'))

function parImpar(n1) {
  let numero = n1

  if (numero % 2 === 0) {
    return `O número é par`
  }

  else {
    return `O número é impar`
  }
}
console.log(parImpar(4))

function tipoDeDado(num, mensagem, booleano) {
  let n1 = num,
    mensage = mensagem,
    casa = booleano,
    vazio

  return `n1 é do tipo ${typeof n1} | mensagem é do tipo ${typeof mensage} | casa é do tipo ${typeof casa} | vazio é do tipo ${typeof vazio}`
}
console.log(tipoDeDado(2, 'destemido', false))

//arrumar
let totalPaises = 193

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar | `
}

function jaVisitei(paisesVisitados) {

  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

console.log(precisoVisitar(22), jaVisitei(22))

//scroll funcionando
// function youKnowMyName(nome, sobrenome) {
//   alert(`${nome} ${sobrenome}`)
// }

// addEventListener('scroll', () => { 
//   youKnowMyName('Wanderson', 'Pedrosa') 
// })

//Objetos
let quadrado = {
  lados: 4,

  area(side) {
    return side * side
  },

  //this se refere a variável dentro do objeto
  perimetro(side) {
    return this.lados * side
  }
}
console.log(quadrado.lados, quadrado.area(4), quadrado.perimetro(4))

//Math
console.log(Math.PI.toFixed(4))
console.log(Math.random())

//O próprio console.log é um objeto que acessar um método
console.table(quadrado)

//Exercícios
let carro = {
  preco: 1000,
  portas: 3,
  marca: 'Gol'
}

console.log(carro.preco)

console.log(carro.preco = 3000)

let cao = {
  raca: 'Vira-lata',
  cor: 'preto',
  idade: 11,

  latePara(modo) {
    if (modo === 'homem') {
      return `Late quando vê um homem`
    }

    else {
      return `Tudo calmo por aqui`
    }
    
  }
}

console.log(cao.latePara('homem'))


//Tudo é objeto
let gerado = 'Senna'

//Retorna o caractere que você determinar
console.log(gerado.charAt(0))

//substiti letras
console.log(gerado.replace('enna', 'ENNA'))

//Exercícios 
let salada = 2,
    frutas = 3,
    feijao = 30

console.log(salada.toString(), frutas.toString(), feijao.toString())

//Loops e arrays
let compras = ['feijão', 'arroz', 'carne']

//pop serve para remover e mostrar o último item da lista (você pode escolher utilizando o parênteses)
console.log(compras.pop())

//Adiciona novo item
compras.push('salada')
console.log(compras[2])

//forEach serve para fazer loops de uma forma mais fácil
//Utilize index para indicar a posição de cada objeto
compras.forEach((modo, index) => {
  console.log(`Comprar ${modo}`)
  console.log(`Que é ${modo, index}`)
})

//Exercícios
let f1 = [72, 87, 88, 90, 91]

f1.forEach((race) => {
  console.log(`O Brasil foi campeão da F1 em ${race}`)
})

let frutada = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for (let i = 0; i < frutada.length; i++) {
  console.log(`Vou comprar ${frutada[i]}`)

  if (i === 2) {
    break
  }
}

let lastFruta = frutada[frutada.length - 1]
console.log(lastFruta, frutada)

let bebida = 20,
    podeBeber = (bebida >= 18) ? 'Pode sim' : 'Pode não'

console.log(podeBeber)

let possuiCarro = true,
    possuiCasa = true,
    darCredito

darCredito = (possuiCarro && possuiCasa) ? 'Aprovada' : 'Reprovada'

console.log(`Sua solicitação de crédito foi ${darCredito.toUpperCase()}`)

//Não crie variáveis sem definição de let, var e const
//Procure criar variáveis utilizando 'let' 
//Se você criar uma variável dentro de um if utilizando 'var' a mesma pode ser acessada. Utilize 'let' ou 'const' para evitar esse tipo de coisa

//Não é possível alterar constantes
const dia = 'domingo'

//Exceção quando são criadas como objetos
//Só não pode modificar o tipo do objeto (number, string, boolean)
const tipo = {
  do: 2,
  re: 3,
  mi: 4
}

//let não permite declarar novamente

// Por qual motivo o código abaixo retorna com erros?
let piu = {
  cor: 'preto',
  marca: 'Fiat',
  portas: 4
}
console.log(piu.cor, piu.marca, piu.portas);

// Como corrigir o erro abaixo?
const dois = 2

function somarDois(x) {
  return x + dois
}

function dividirDois(x) {
  return x / dois
}

console.log(`Coloca ${dois} e fica ${somarDois(4)}`)
console.log(`Divide por ${dois} e fica ${dividirDois(6)}`)

// O que fazer para total retornar 500?
const numero = 50

for (let i = 0; i < 10; i++) {
  console.log(i)
}

let total = 10 * numero
console.log(total)