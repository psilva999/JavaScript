const inputCep = document.querySelector('[media-cep]'),
      buscarCep = document.querySelector("button")

buscarCep.onclick = modo => { 
  const cep = inputCep.value

  modo.preventDefault()
  mostraCep(cep)
}

function mostraCep(e) {
  fetch(`https://viacep.com.br/ws/${e}/json/`)
  .then(response => response.text())
  
  .then(body => {
    document.body.innerHTML += body
  })
}