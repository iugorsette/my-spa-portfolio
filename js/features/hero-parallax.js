export function initHeroParallax() {
  const hero = document.querySelector('.hero-parallax')
  if (!hero) return

  const canvas = hero.querySelector('.bg-canvas')
  const overlay = hero.querySelector('.hero-overlay')
  const content = hero.querySelector('.hero-content')

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const heroHeight = hero.offsetHeight
    const progress = Math.min(scrollY / heroHeight, 1)

    canvas.style.transform = `translateY(${scrollY * 0.25}px)`
    overlay.style.transform = `translateY(${scrollY * 0.15}px)`
    content.style.transform = `translateY(${scrollY * 0.35}px)`
    content.style.opacity = `${1 - progress * 1.1}`
    overlay.style.opacity = `${1 - progress * 1.2}`
  })
}
