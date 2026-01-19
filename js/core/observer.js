export function onIntersect(el, cb) {
  if (!('IntersectionObserver' in window)) {
    cb()
    return
  }

  const obs = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        cb()
        obs.disconnect()
      }
    },
    { threshold: 0.1 },
  )

  obs.observe(el)
}

export function initReveal() {
  const elements = document.querySelectorAll('.reveal')

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px',
    },
  )

  elements.forEach((el) => observer.observe(el))
}
