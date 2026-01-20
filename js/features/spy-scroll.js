export function initSpyScroll() {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.header-nav a')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.dataset.section === entry.target.id,
            )
          })
        }
      })
    },
    {
      threshold: 0.6,
    },
  )

  sections.forEach(section => observer.observe(section))
}
