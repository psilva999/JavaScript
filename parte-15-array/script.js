//Array
//Arrays armazenam uma coleção de elementos. Podem ser strings, numbers, booleans, object, functions e assim por diante

const tal = ['teu', 22, true],
  tipo = [new String('tipo esse'), ['ford', 'ferrari'], { cor: 'Azul', preco: 2000 }, function andar(nome) { console.log(nome) }]

console.log(tipo[2].cor)

//CONSTRUÇÃO DE ARRAYS
//Toda array herda os métodos e propriedades do protótipo do construtor Array.

const tataka = ['teka', 'tika', 'toka'],
      car = new Array('tesla', 'ford')

console.log(car.length, car[2] = 'mercedes')

//Array.from()
//array.from() é um método utilizado para transformar array-like objects, em um array
let li = document.querySelectorAll('li')//nodelist
//console.log(li = Array.from(li))

const onibus = {
  0: 'tipo',
  1: 'teu',

  2: 'tal',
  length: 4
}

console.log(Array.from(onibus))

//array.isarray()
//Verifica se o valor passado é um array e retorna um valor booleano
console.log(Array.isArray(li))

li = Array.from(li)
console.log(Array.isArray(li))

// ARRAY.OF(), ARRAY() E NEW ARRAY()
// Verifica se o valor passado é uma array e retorna um valor booleano.A palavra chave new não é necessária para utilizar o construtor Array.

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

//[].sort() -- organiza pelo unicode
const vem = ['vai', 'foisss', 'veioa'],
      re = [33, 332, 21, 212]

console.log(vem.sort(), re.sort())

//[].unshift() adiciona elementos ao início da array
//[].shift() remove o primeiro elemento da array e retorna
//[].opo() remove o ultimo elemento e retorna o mesmo
//[].reverse() inverte os itens da array e retorna a nova array.

const moto = ['seila', 'esse', 'aquele']
console.log(moto.reverse())

//splice(index, remover, item1) -- adiciona valores no array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro(retorna esses itens)

const aviao = ['tam', 'airlines', 'gol']

console.log(`Aviao ${aviao.splice('duranduran', 1)}`)

//copyWithin(alvo, inicio, final) -- a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. caso omita os valores de inicio e final, ele irá utilizar como inicio o 0 e final o valor total do array
const tata = ['nadal', 'guga', 'federer']

console.log(tata.copyWithin(2, 0, 1))

//[].INCLUDES(), [].INDEXOF() E[].LASTINDEXOF()
//[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array.Já o[].lastIndexOf(valor) retorna o index do último.

//[].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
console.log(comidas.shift())

// Remova o último valor de comidas e coloque em uma variável
console.log(comidas.pop())

// Adicione 'Arroz' ao final da array
console.log(comidas.push = 'terra')

// Adicione 'Peixe' e 'Batata' ao início da array
console.log(comidas.unshift('Peixe'), comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort())

// Inverta a ordem dos estudantes
console.log(estudantes.reverse())

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

html = html.split('section').join('ul').split('div').join('li')
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'],
      otherCar = carros.slice()
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

console.log(carros.pop(), othercar)