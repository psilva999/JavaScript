const controles = document.querySelector('#controles'),
      cssText = document.querySelector('.css'),
      btn = document.querySelector('.btn')

controles.addEventListener('change', handleChange)

const handleStyle = {
  element: btn,

  texto(value) {
    this.element.innerText = value
  },

  color(value) {
    this.element.style.color = value
  },

  backgroundColor(value) {
    this.element.style.backgroundColor = value
  },

  height(value) {
    this.element.style.height = `${value}px`
  },

  width(value) {
    this.element.style.width = `${value}px`
  },

  border(value) {
    this.element.style.border = value
  },

  borderRadius(value) {
    this.element.style.borderRadius = `${value}rem`
  },

  fontFamily(value) {
    this.element.style.fontFamily = value
  },

  fontSize(value) {
    this.element.style.fontSize = `${value}rem`
  }
}

function handleChange(e) {
  const name = e.target.name,
        value = e.target.value
  
  handleStyle[name](value) 
  saveValues(name, value)
  showCss()
}

//LOCAL STORAGE
function saveValues(name, value) {
  localStorage[name] = value
}

function setValues() {
  const properties = Object.keys(localStorage)

  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie])
    controles.elements[propertie].value = localStorage[propertie]
  })

  showCss()
}
setValues()

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}
