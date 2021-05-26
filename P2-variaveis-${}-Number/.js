
  // Variável armazenando a pergunta que será feita ao usuário
  var nomeUsuario = prompt('Qual o seu nome?')

  // Utilizei `${}` com crase para escrever o texto com variáveis
  alert (`Prazer te conhecer, ${nomeUsuario}`)

  // Variáveis pedindo que o usuário digite um número | 'Number' indicando que a resposta será um número inteiro ou real
  var pUsuario = Number (prompt ('Digite um número:'))
  var pUsuario2 = Number (prompt ('Digite um segundo número:'))
  var Total = pUsuario + pUsuario2

  alert (`A soma entre ${pUsuario} e ${pUsuario2} é igual a ${Total}`)
