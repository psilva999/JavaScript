const content = document.querySelectorAll('h1'),
      activeTitleClass = 'titulo-ativo',
      activeClass = 'ativo'

if (content.length) {
  content[0].classList.add(activeTitleClass)
  content[0].nextElementSibling.classList.add(activeClass)

  function ativa_texto() {
    if (this.nextElementSibling.classList.contains('ativo')) {
      this.classList.toggle(activeTitleClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    else {
      this.classList.toggle(activeTitleClass)
      this.nextElementSibling.classList.add(activeClass)
    }
  }

  content.forEach(modo => {
    modo.addEventListener('click', ativa_texto)
  })
}