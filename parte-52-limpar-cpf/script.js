const cpfList = document.querySelectorAll('li')
      
const elementsText = ([...elements]) => elements.map(e => e.innerText)
      
const limparCpf = cpf => cpf.replace(/\D/g, '')

const construirCpf = cpf => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatarCpf = cpfs => { 
  return cpfs.map(limparCpf).map(construirCpf)
}
      
const substituirCpfs = cpfsElements => {
  const cpfs = elementsText(cpfsElements),
        cpfsFormatados = formatarCpf(cpfs)

  cpfsElements.forEach((e, index) => {
    e.innerText = cpfsFormatados[index]
  })
}

substituirCpfs(cpfList)