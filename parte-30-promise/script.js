//Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

//Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

//Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.

//O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.
const prometa = new Promise((resolve, reject) => {
  let condicao = true

  if (condicao) resolve('Verdade aqui')

  else reject(Error('Errado aqui'))
})

prometa.then(resolucao => {
  console.log(resolucao)
})

//Assync
const promessa = new Promise((t, f) => {
  setTimeout(() => {
    t('resolvida')
  }, 1000)
})

promessa.then(modo => {
  console.log(modo)
})

//O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.
const tenta = new Promise((t, f) => {
  t("Etapa 1")
})

tenta.then(modo => {
  console.log(modo)
  return 'Etapa 2'

}).then(modo => {
  console.log(modo)
  return 'Etapa 3'

}).then(r => r + 3).then(r => {
  console.log(r)
})

//O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.
const promessas = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

promessas.then(resolucao => {
  console.log(resolucao);
}).catch(reject => {
  console.log(reject);
});

//finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.
const prome = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

prome.then(resolucao => {
  console.log(resolucao);
}, reject => {
  console.log(reject);
}).finally(() => {
  console.log('Acabou'); // 'Acabou'
});

//Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.
const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
  console.log(resposta); // Login Efetuado
});