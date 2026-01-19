export function initHeroCanvas() {
  
  /* HERO CANVAS */

  const canvas = document.getElementById('heroCanvas')
  const ctx = canvas.getContext('2d')

  let w, h
  function resize() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', resize)
  resize()

  const dots = Array.from({ length: 80 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
  }))

  let mouseX = w / 2
  let mouseY = h / 2

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })
  let heroVisible = true

  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      heroVisible = entry.isIntersecting
    },
    { threshold: 0.1 },
  )

  heroObserver.observe(document.querySelector('.hero'))

  function animate() {
    if (!heroVisible) {
      requestAnimationFrame(animate)
      return
    }

    ctx.clearRect(0, 0, w, h)

    dots.forEach((d) => {
      d.x += d.vx
      d.y += d.vy

      if (d.x < 0 || d.x > w) d.vx *= -1
      if (d.y < 0 || d.y > h) d.vy *= -1

      const dx = d.x - mouseX
      const dy = d.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const alpha = dist < 200 ? 0.9 : 0.4

      ctx.fillStyle = `rgba(94,234,212,${alpha})`
      ctx.beginPath()
      ctx.arc(d.x, d.y, 2, 0, Math.PI * 2)
      ctx.fill()
    })

    requestAnimationFrame(animate)
  }

  animate()

  /* HERO PARALLAX + TRANSITION */

  const hero = document.querySelector('.hero')
  const heroContent = document.querySelector('.hero-content')
  const heroOverlay = document.querySelector('.hero-overlay')

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const heroHeight = hero.offsetHeight
    const progress = Math.min(scrollY / heroHeight, 1)

    // Parallax layers
    canvas.style.transform = `translateY(${scrollY * 0.25}px)`
    heroOverlay.style.transform = `translateY(${scrollY * 0.15}px)`
    heroContent.style.transform = `translateY(${scrollY * 0.35}px)`
    heroContent.style.opacity = `${1 - progress * 1.1}`

    // suavemente "apaga" o glow
    heroOverlay.style.opacity = `${1 - progress * 1.2}`
  })

  /* PROJECTS FADE-IN (Intersection)  */

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card)
  })
}
