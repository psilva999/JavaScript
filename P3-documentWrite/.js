
  // Variável perguntando o nome do usuário
  var nomeUsuario = prompt('Qual o seu nome?')

  // 'document.write' escreve no documento HTML no lugar de mostrar um alerta

  // length - mostra quantas letras tem na variável que o usuário nos passou
  document.write(`Seu nome tem ${nomeUsuario.length} letras <br>`)

  // toUpperCase - Letra maiúscula
  document.write(`Seu nome maiúsculo: ${nomeUsuario.toUpperCase()} <br>`)

  // toLowerCase - Letra minúscula
  document.write(`Seu nome minúsculo: ${nomeUsuario.toLowerCase()}`)
