import { initStickyHeader } from './features/sticky-header.js'
import { initSmoothScroll } from './features/smooth-scroll.js'
import { initModals } from './features/modals.js'
import { initGallery } from './components/gallery.js'
import { initTheme } from './features/theme.js'
import { initHeroCanvas } from './features/hero-canvas.js'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear()

  initStickyHeader()
  initSmoothScroll()
  initModals()
  initGallery()
  initTheme()
  initHeroCanvas()
})
