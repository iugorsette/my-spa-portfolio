import { initStickyHeader } from './features/sticky-header.js'
import { initSmoothScroll } from './features/smooth-scroll.js'
import { initModals } from './features/modals.js'
import { initGallery } from './components/gallery.js'
import { initTheme } from './features/theme.js'
import { initCanvasBackgrounds } from './features/hero-canvas.js'
import { initReveal } from './core/observer.js'
import { initHeroParallax } from './features/hero-parallax.js'
import { initSpyScroll } from './features/spy-scroll.js'
import { initI18n } from './features/i18n.js'

document.addEventListener('DOMContentLoaded', () => {
  initI18n()
  initReveal()
  initStickyHeader()
  initSmoothScroll()
  initModals()
  initGallery()
  initTheme()
  initCanvasBackgrounds()
  initHeroParallax()
  initSpyScroll()
})
