  var n = 250.779898
  var dolar = 1000

  // Exemplo de toFixed ajustando a quantidade de casas depois do ponto
  alert (`Sem toFixed: ${n}`)
  alert (`Com toFixed: ${n.toFixed(2)}`)

  // replace trocando o ponto pela vírgula
  alert (`Com toFixed e replace: ${n.toFixed(2).replace('.', ',')}`)

  /* toLocaleString localizará a string indicada (pt-BR nesse caso)
     currency - indica que uma valor monetário será utilizado */
  alert (`${n.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'}) }`)

  alert (`${n.toLocaleString('pt-BR', {style:'currency', currency: 'USD'}).replace(',', '.') }`)
