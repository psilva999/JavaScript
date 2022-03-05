const tooltip = document.querySelectorAll("[data-tooltip]")

tooltip.forEach(modo => {
  modo.addEventListener("mouseover", mouseOver)
})

function mouseOver(modo) {
  const tooltipBox = criarTooltip(this)
  
  onMouseMove.tooltipBox = tooltipBox
  this.addEventListener('mousemove', onMouseMove)

  onMouseLeave.tooltipBox = tooltipBox
  onMouseLeave.element = this
  this.addEventListener('mouseleave', onMouseLeave)
}

const onMouseLeave = {
  //Você pode remover esses dois
  tooltipBox: '',
  element: '',

  handleEvent() {
    this.tooltipBox.remove()
    this.element.removeEventListener('mouseleave', onMouseLeave)
  }
}

const onMouseMove = {
  handleEvent(modo) {
    this.tooltipBox.style.top = modo.pageY + 20 + 'px'
    this.tooltipBox.style.left = modo.pageX + 20 + 'px'
  }
}

function criarTooltip(element) {
  const tooltipBox = document.createElement('div'),
        text = element.getAttribute("aria-label")

  tooltipBox.classList.add("tooltip")
  tooltipBox.innerText = text

  document.body.appendChild(tooltipBox)
  return tooltipBox
}