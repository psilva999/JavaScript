//São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento é chamado de Function Declaration.
function somar(a, b) {
  return a + b;
}

somar(4, 2); // 6

//É criada a partir da declaração de uma variável, na qual assinalamos uma função.Esta função pode ser anônima ou nomeada.A mesma poderá ser ativada através da variável assinalada.
const somar = function (a, b) {
  return a + b;
}

somar(4, 2); // 6

//Function Declarations são completamente definidas no momento do hoisting, já function expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma FE possui importância.
somarr(4, 2); // 6
dividirr(4, 2); // Erro

function somarr(a, b) {
  return a + b;
}
const dividirr = function (a, b) {
  return a / b;
}

//arrow function
const somar = (a, b) => a + b;
somar(4, 2); // 6

const quadrado = a => a * a;
quadrado(4); // 16

//Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.

// Declarada como método de window
// vaza o escopo de bloco, como se
// fosse criada utilizando var
function somar(a, b) {
  return a + b;
}
const dividir = (a, b) => a / b;

somar(4, 2);
dividir(4, 2);

// Remova o erro
priceNumber('R$ 99,99');
const priceNumber = n => +n.replace('R$', '').replace(',', '.');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();