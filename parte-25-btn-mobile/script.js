const menuButton = document.querySelector('[data-menu="button"]'),
      menuList = document.querySelector('[data-menu="list"]')

function openMenu(e) {
  menuButton.classList.add('active')
  menuList.classList.add('active')

  fechaPorFora(menuList, ['click', 'touchstart'], () => {
    menuButton.classList.remove('active')
    menuList.classList.remove('active')
  })
}

['click', 'touchstart'].forEach(e => menuButton.addEventListener(e, openMenu))

//função de fora
function fechaPorFora(element, tal, callback) {
  if (!element.hasAttribute('data-outside')) {
    tal.forEach(modo => {
      setTimeout(() => document.documentElement.addEventListener(modo, quebra))
    })

    document.documentElement.addEventListener(tal, quebra)
    element.setAttribute('data-outside')
    console.log(element)
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

function teste() {
  const numeros = document.querySelector("[data-fla]"),
    text = +numeros.innerText,
    incremento = Math.floor(text / 10)

  let start = 0
  const timer = setInterval(() => {
    start++

    numeros.innerText = start + incremento
    if (start > text) clearInterval(timer)
  }, 1 * Math.random())
}

function mutato(e) {
  if (e[0].target.classList.contains('active')) {
    teste()
    observer.disconnect()
  }
}

const observer = new MutationObserver(mutato),
      targetObs = document.querySelector(".numeros")

observer.observe(targetObs, {attributes: true})