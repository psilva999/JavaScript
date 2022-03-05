//fetch API
//Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.
fetch('hello.txt').then(response => {
  console.log(response)
})

//O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.
fetch('hello.txt').then(modo => {
  return modo.text()
}).then(m => {
  console.log(m)
})

//O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.

//Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.
fetch('https://viacep.com.br/ws/01001000/json/').then(modo => modo.json()).then(cep => {
  console.log(cep.bairro, cep.logradouro)
})

//Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
fetch('style.scss').then(modo => {
  return modo.text()
}).then(meda => {
  console.log(meda)
})

//Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.
const div = document.createElement("div")

// fetch('index.html')
// .then(modo => modo.text())
// .then(htmlBody => {
//   div.innerHTML = htmlBody
//   const titulo = div.querySelector('h1')

//   document.querySelector('h1').innerText = titulo.innerText
// })
//ERRO

//Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.
const divs = document.createElement('div');

fetch('images.jfif')
  .then(response => response.blob())
  .then(imgBlob => {
    const blobUrl = URL.createObjectURL(imgBlob);
    console.log(blobUrl);
  });

//Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.
const diva = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
  const cloneResponse = response.clone();
  response.json().then(json => {
    console.log(json)
  });
  cloneResponse.text().then(text => {
    console.log(text)
  });
});


//.HEADERS
//É uma propriedade que possui os cabeçalhos da requisição.É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.
const tipo = document.querySelector('div')

fetch('https://viacep.com.br/ws/01001000/json/')
.then(modo => {
  modo.headers.forEach(console.log)
})

//.STATUS E .OK
//Retorna o status da requisição.Se foi 404, 200, 202 e mais.ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.
const vem = document.createElement("div")

fetch('https://viacep.com.br/ws/01001000/json/')
.then(modo => {
  console.log(modo.status, modo.ok)

  if (modo.status === 404) console.log('Página não encontrada')
})

//.url retorna o url da requisição. .type retorna o tipo da reposta.
fetch('https://viacep.com.br/ws/01001000/json/')
.then(modo => {
  console.log(modo.type, modo.url)
})

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima