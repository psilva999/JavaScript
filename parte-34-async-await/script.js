//A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.O await irá indicar a promise que devemos esperar.Faz parte do ES8.
async function puxarDados() {
  const dadosResponse = await fetch('data.json'),
        dadosJSON = await dadosResponse.json()

  document.body.innerText = dadosJSON.titulo   
}

puxarDados()

//then / async
//A diferença é uma sintaxe mais limpa
//Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.
async function iniciarAsync() {
  try {
    const dadosResponse = await fetch('data.json'),
      dadosJSON = await dadosResponse.json()

    document.body.innerText = dadosJSON.titulo
  }
  
  catch(erro) { console.log(erro) }
}

iniciarAsync()

//Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.
async function outraAsync() {
  const dadosResponse = fetch('data.json'),
        clientesResponse = fetch('clientes.json')

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json(),
        clientesJSON = await (await clientesResponse).json();
}

outraAsync();

//O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.
async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();

async function vemAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('Depois de 1s');
}
vemAsync();