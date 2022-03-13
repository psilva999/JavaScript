import { SlideNav } from './slide.js'

const slide = new SlideNav('section', 'body')

slide.init()
slide.addArrow('[data-prev]', '[data-next]')

console.log(slide)
