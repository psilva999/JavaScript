const p = document.querySelectorAll('p'),
      metade = window.innerHeight * .6

function scrollAnime() {
  p.forEach(modo => {
    const top = modo.getBoundingClientRect().top - metade

    if (top < 0)  modo.classList.add('ativo')
    
    else modo.classList.toggle('ativo')
  })
}

scrollAnime()

window.addEventListener('scroll', scrollAnime)