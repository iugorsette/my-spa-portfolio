export function initHeroParallax() {
  const hero = document.querySelector('.hero-parallax')
  if (!hero) return

  const canvas = hero.querySelector('.bg-canvas')
  const overlay = hero.querySelector('.hero-overlay')

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    if (canvas) canvas.style.transform = `translateY(${scrollY * 0.25}px)`
    overlay.style.transform = `translateY(${scrollY * 0.15}px)`
  })
}
