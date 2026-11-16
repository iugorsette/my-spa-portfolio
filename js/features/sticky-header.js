export function initStickyHeader() {
  const stickyHeader = document.getElementById('stickyHeader')
  const heroSection = document.querySelector('.hero')
  const expandToggle = document.getElementById('navExpandToggle')

  const updateToggleText = () => {
    const expanded = stickyHeader.classList.contains('expanded')
    const english = document.documentElement.lang === 'en-US'
    const label = expandToggle?.querySelector('.toggle-label')
    if (label) {
      label.textContent = expanded
        ? english ? 'Collapse menu' : 'Recolher menu'
        : english ? 'Expand menu' : 'Expandir menu'
    }
    expandToggle?.setAttribute('aria-label', label?.textContent || 'Expandir menu')
  }

  const setExpanded = (expanded) => {
    stickyHeader.classList.toggle('expanded', expanded)
    expandToggle?.setAttribute('aria-expanded', String(expanded))
    updateToggleText()
  }

  document.addEventListener('i18n:change', updateToggleText)

  expandToggle?.addEventListener('click', () => {
    setExpanded(!stickyHeader.classList.contains('expanded'))
  })

  stickyHeader.querySelectorAll('.header-nav a').forEach((link) => {
    link.addEventListener('click', () => setExpanded(false))
  })

  const observerStickyHeader = new IntersectionObserver(
    ([entry]) => {
      stickyHeader.classList.toggle('visible', !entry.isIntersecting)
    },
    { threshold: 0.2 },
  )

  observerStickyHeader.observe(heroSection)
}
