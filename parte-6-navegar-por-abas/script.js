const p = document.querySelectorAll('p'),
  li = document.querySelectorAll('li')


if (p.length && li.length) {
  p[0].classList.add('active')

  function ativa_texto(index) {
    p.forEach(ativo => ativo.classList.remove('active'))

    p[index].classList.add("active")
  }

  li.forEach((modo, index) => {
    modo.addEventListener("click", () => ativa_texto(index))
  })
}