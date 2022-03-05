function scroll_liso(link) {
  link.preventDefault()

  const href = link.currentTarget.getAttribute('href'),
        p = document.querySelector(href)

  //Código alternativo
  //       topo = p.offsetTop


  // window.scrollTo({
  //   top:topo,
  //   behavior: 'smooth',
  // })

  p.scrollIntoView ({
    behavior: 'smooth',
    block: 'start',
  })
}

document.querySelectorAll('a[href^="#"]').forEach(modo => {
  modo.addEventListener('click', scroll_liso)
})