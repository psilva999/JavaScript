const menu = document.querySelectorAll('[data-button]')

menu.forEach(modo => {
  ['touchstart', 'click'].forEach(user => {
    modo.addEventListener(user, dropdown)

  })
})

function dropdown(e) {
  e.preventDefault()
  this.classList.toggle("active")

  fechaPorFora(this, ['touchstart', 'click'], () => {
    
    this.classList.remove("active")
  })
}

function fechaPorFora(element, tal, callback) {
  if (!element.hasAttribute('data-outside')) {
    tal.forEach(modo => {
      setTimeout(() => document.documentElement.addEventListener(modo, quebra))
    })

    document.documentElement.addEventListener(tal, quebra)
    element.setAttribute('data-outside')
  }

  function quebra(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute('data-outside')

      callback()
      tal.forEach(modo => {
        document.documentElement.removeEventListener(modo, quebra)
      })
    }

  }
}