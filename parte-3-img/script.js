document.querySelectorAll('img').forEach( modo => { 
  modo.addEventListener('click', () => console.log(modo.src))
})