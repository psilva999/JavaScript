
  var reduzido = 240.542332

  // '${}' com crase facilita a junção entre 'string' e variáveis | toFixed - para exibir duas casas depois da vírgula (ou ponto)
  // replace - substitui o ponto pela vírgula
  document.write (`${reduzido.toFixed(2).replace('.', ',')} <br>`)


  // toLocaleString - localiza a string indicada (no caso 'pt-BR')
  // 'currency' - indica que será utilizado um valor monetário (BRL, USD, EUR, etc)
  document.write (`${reduzido.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})} <br>`)

  document.write (`${reduzido.toLocaleString('pt-BR', {style:'currency', currency: 'USD'})} <br>`)
  document.write (`${reduzido.toLocaleString('pt-BR', {style:'currency', currency: 'EUR'})}`)
