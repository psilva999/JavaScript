//settimeout()
//setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.

function oi(t) {
  console.log(t)
}

setTimeout(oi, 1000, 'Depois vem aqui')

//Podemos passar uma função anônima diretamente com argumento.

//LOOPS e
//Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

for (let i = 0; i <= 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 300)
}

//Multiplicar o tempo
for (let i = 0; i <= 3; i++) {
  setTimeout(() => {
    console.log(`Dou-lhe ${i}`)
  }, 300 * i)
}

//Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado.
//Sem isso daria erro
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

// this agora é btn.
function handleClick(event) {
  setTimeout(() => {
    this.classList.add('active');
  }, 1000)
}

//setInterval
//irá ativar o callback toda vez que a quantidade de tempo passar.

let i = 0
setInterval(() => {
  console.log(i++)
}, 1000)

//clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.
let conta = setInterval(callback, 1000),
    pp = 0
    
function callback() {
  console.log(pp++)

  if (pp >= 9) {
    clearInterval(conta)
  }
}