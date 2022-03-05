//Number
//Construtora de números com seus proprios métodos. Todo número possui propriedades e métodos de prototype de Number. 

const ano = 2022,
      combustivel = new Number(2000)

console.log(combustivel)

//Number.isNaN() e Number.isInterger()
//isNaN() é um método de Number, ou seja, não faz parte to protótipo.isInteger() verifica se é uma integral.
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false

//NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
//parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

//Float possui decimal. Já o Integer não possui.

//N.toString(radix)
//Transforma o número em uma string com base no Radix. Use 10 para o sistema decimal
const n = 10.77
console.log(n.toString(10))

//N.TOLOCALESTRING(LANG, OPTIONS);
//Formata o número de acordo com a língua e opções passadas.

const preco = 59.49;
preco.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // $59.49
preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // R$ 59,49

//Math
//É um objeto nativo que possui propriedades e métodosde expressões matemáticas comuns
console.log(Math.PI, Math.E, Math.LN10)

// MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

//MATH.MAX(), MATH.MIN() E MATH.RANDOM();
//max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

console.log(Math.max(0, 22, 33, 2), Math.min(0, 3, 22, -2), (Math.random() * 100).toFixed(3))

// Retorne um número aleatório
// entre 1050 e 2000
let tipo = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050

console.log(`O número aleatório é ${tipo}`)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9',
      arrayN = numeros.split(', ')

console.log(`O maior número da lista é ${Math.max(...arrayN)}`)
//Colocando os 3 pontos é como se desse espaço no array

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'];

function limpa(price) {
  price = +price.toUpperCase().replace('R$', '').trim().replace(',', '.')

  price = +price.toFixed(2)
  console.log(price)
}

let s = 0
listaPrecos.forEach(modo => {
  s += limpa(modo)
})

limpa(listaPrecos[1])