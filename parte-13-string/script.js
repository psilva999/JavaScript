//É a construtora de strings, toda string possui as propriedades e métodos do prototype de String

const esse = 'aquele',
      gasosa = new String('Ar'),
      ano = new String('2022')

console.log(esse[0])//Mostra a primeira letra

console.log(esse[esse.length - 1]) //Mostra a ultima letra

//Para concatenar palavras
console.log(esse.concat(ano))

//str.includes(search, position) -- procura pela string exata dentro de outra string. A procura é case sensitive

const fruta = 'Laranja',
      tipos = 'Laranja, Cravo, Da terra'

console.log(tipos.includes(fruta))

//str.endsWith(search) e str.startsWidth(search)
//Procura pela string exata dentro de outra string. A procura é case sensitive

const teste = 'testado'

console.log(teste.endsWith('ado'))
console.log(teste.startsWith('tes'))

//str.slice(start, end) -- corta a string de acordo com os valores de start e end
const gerador = 'Gerando energia'

console.log(gerador.slice(0, 5), gerador.slice(10))

//str.substring(start, end)
//Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice

const linguagem = 'Java'

console.log(linguagem.substring(1, 2))

//str.indexOf(search) e str.lastIndexOf(search)
//Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado

const paladino = 'palace'

console.log(paladino.indexOf("p"))

console.log(paladino.lastIndexOf('e'))

//str.padStart(n, str) e str.padEnd(n, str)
//Aumenta o tamanho da string para o valor desejado. O preechimento pode ser feito com espaços caso você não declare o segundo argumento

const preco = ['R$23', 'R$3223']

preco.forEach(price => console.log(price.padStart(6, '-')))

console.log(preco[0].padEnd(3, '='))

//str.repeat(n)
//repete a string(n) vezes
const words = 'Isso '

console.log(words.repeat(3))

//str.replace(regexp|substr, newstr|function)
//Troca parte da string por outra. podemos utilizar uma regular expression ou um valor direto. se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar

let radio = 'Pan Band CBN Rock Mix',
    salario = '1000,00'

radio = radio.replace(/[ ]+/g, ', ')

console.log(radio)

console.log(salario.replace(',', '.'))

//str.split(padrao)
//Divide a string de acordo com o padrão passado e retorna uma array
const itens = 'Boné Bermuda Sandália'
console.log(itens.split(' '))

let tags = '<div>Telephone</div>'

tags = tags.split('div')
tags = tags.join('section')

document.body.innerHTML = tags

//str.trim(), str.trimStart(), str.trimEnd()
//Remove espaço em branco do início ou final de uma string

const valor = ' R$ 22 2 '

console.log(valor.trim())

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0,
    recebimentoTotal = 0

transacoes.forEach(modo => {
  const valorLimpo = +modo.valor.replace('R$ ', '')

  if (modo.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += valorLimpo
  }

  else if (modo.descricao.slice(0, 4) === 'Rece') {
    recebimentoTotal += taxaTotal
  }
})

console.log(`Taxa somada: ${taxaTotal}`, `Recebimento: ${recebimentoTotal}`)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(';'))

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`

html = html.split('span').join('a')

console.log(html)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(frase.length - 1))

// Retorne o total de taxas
const transacao = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxas = 0

transacao.forEach(modo => {
  modo = modo.toUpperCase().trim()

  if (modo.slice(0, 4) === 'TAXA') {
    taxas++  
  }
})

console.log(`Temos ${taxas} taxas no total`)