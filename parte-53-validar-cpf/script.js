const cpf = document.querySelector("#cpf")

class ValidarCpf {
  constructor(element) {
    this.element = element
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, '')
  }

  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }

  formatar(cpf) {
    const limpaCpf = this.limpar(cpf)

    return this.construir(limpaCpf)
  }

  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)

    return (matchCpf && matchCpf[0] === cpf)
  }

  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) { 
      cpfElement.value = this.formatar(cpfElement.value)

      cpfElement.classList.remove('red')
      cpfElement.classList.add('green')
      cpfElement.nextElementSibling.classList.remove('ativo')
    }

    else {
      cpfElement.classList.add('red')
      cpfElement.classList.remove('green')
      cpfElement.nextElementSibling.classList.add('ativo')
    }
  }

  evento() {
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element)
    })
  }

  erroSpan() {
    const erroElement = document.createElement('span')

    erroElement.classList.add('erro-txt')
    erroElement.innerText = 'CPF INVÁLIDO'
    this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling)
  }

  iniciar() {
    this.evento()
    this.erroSpan()

    return this
  }
}

const validarCpf = new ValidarCpf(cpf).iniciar()