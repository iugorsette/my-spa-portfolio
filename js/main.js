import { initStickyHeader } from './features/sticky-header.js'
import { initSmoothScroll } from './features/smooth-scroll.js'
import { initModals } from './features/modals.js'
import { initGallery } from './components/gallery.js'
import { initTheme } from './features/theme.js'
import { initCanvasBackgrounds } from './features/hero-canvas.js'
import { initReveal } from './core/observer.js'
import { initHeroParallax } from './features/hero-parallax.js'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear()

  initReveal()
  initStickyHeader()
  initSmoothScroll()
  initModals()
  initGallery()
  initTheme()
  initCanvasBackgrounds()
  initHeroParallax()
})
