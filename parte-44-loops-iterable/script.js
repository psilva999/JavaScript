//São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(({ headers }) => console.log(headers));

//É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.
const frutass = ['Banana', 'Morango', 'Uva'];
const frases = 'Isso é JavaScript';

for (const fruta of frutass) {
  console.log(fruta);
}

for (const char of frases) {
  console.log(char);
}

//Com o for loop podemos manipular cada um dos elementos do objeto iterável.
const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
  btn.style.background = 'blue';
}

console.log(...buttons);

//O for...of não irá funcionar em um objeto comum que não seja iterável.
const carro = {
  marca: 'Honda',
  ano: 2018,
}

// Erro, não é Iterável
for (const propriedade of carro) {
  console.log(propriedade);
}

//Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.
const carro = {
  marca: 'Honda',
  ano: 2018,
}

for (const propriedade in carro) {
  console.log(propriedade);
}

//Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.
const frutas = ['Banana', 'Morango', 'Uva'];

for (const index in frutas) {
  console.log(index);
}

for (const index in frutas) {
  console.log(frutas[index]);
}

//Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumerávei
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

//Outro tipo de loop é o Do / While. Não é muito utilizado.
let i = 0;
do {
  console.log(i++)
} while (i <= 5);

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window