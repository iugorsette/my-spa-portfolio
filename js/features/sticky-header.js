export function initStickyHeader() {
  const stickyHeader = document.getElementById('stickyHeader')
  const heroSection = document.querySelector('.hero')

  const observerStickyHeader = new IntersectionObserver(
    ([entry]) => {
      stickyHeader.classList.toggle('visible', !entry.isIntersecting)
    },
    { threshold: 0.2 },
  )

  observerStickyHeader.observe(heroSection)
}
