export default class Slide {
  constructor(slide, wrapper) {

    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)

    this.dist = { finalPosition: 0, startX: 0, movement: 0 }
  }

  moveSlide(distX) {
    this.dist.movePosition = distX
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.3
    return this.dist.finalPosition - this.dist.movement
  }

  onStart(e) {
    let movetype

    if (e.type === 'mousedown') {
      e.preventDefault()

      this.dist.startX = e.clientX
      movetype = 'mousemove'
    }
    
    else {
      this.dist.startX = e.changedTouches[0].clientX
      movetype = 'touchmove'
    }

    this.wrapper.addEventListener(movetype, this.onMove)
  }

  onMove(e) {
    const pointerPosition = (e.type === 'mousemove')? e.clientX : e.changedTouches[0]
    const finalPosition = this.updatePosition(e.clientX)

    this.moveSlide(finalPosition)
  }

  onEnd(e) {
    const movetype = (e.type === 'mouseup')? 'mousemove' : 'touchmove'

    this.wrapper.removeEventListener(movetype, this.onMove)
    this.dist.finalPosition = this.dist.movePosition
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart)
    this.wrapper.addEventListener("touchstart", this.onStart)

    this.wrapper.addEventListener("mouseup", this.onEnd)
    this.wrapper.addEventListener("touchend", this.onEnd)
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2

    return -(slide.offsetLeft - margin)
  }

  slideConfig() {
    this.slideArray =[...this.slide.children].map(element => {
      const position = this.slidePosition(element)

      return { position, element }
    })
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1
    console.log(last)

    this.index = { 
      prev: index ? index - 1 : undefined,
      active: index, 
      next: index === last ? undefined : index + 1,
    }
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index] 

    this.moveSlide(this.slideArray[index].position)
    this.slidesIndexNav(index)

    this.dist.finalPosition = activeSlide.position
  }

  init() {
    this.bindEvents()
    this.addSlideEvents() 
    this.slideConfig()

    return this
  }
}
