document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear()

  /* =============================
   * HERO CANVAS
   * ============================= */
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

  /* =============================
   * HERO PARALLAX + TRANSITION
   * ============================= */
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

  /* =============================
   * THEME — SYSTEM FIRST
   * ============================= */
  const themeToggle = document.getElementById('themeToggle')
  const prefersLight = window.matchMedia(
    '(prefers-color-scheme: light)',
  ).matches
  const savedTheme = localStorage.getItem('theme')

  const isLight = savedTheme ? savedTheme === 'light' : prefersLight

  document.body.classList.toggle('light', isLight)
  themeToggle.checked = isLight

  themeToggle.addEventListener('change', () => {
    const light = themeToggle.checked
    document.body.classList.toggle('light', light)
    localStorage.setItem('theme', light ? 'light' : 'dark')
  })

  /* =============================
   * PROJECTS FADE-IN (Intersection)
   * ============================= */
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

  /* =============================
   * IFRAME MODAL
   * ============================= */
  const iframeModal = document.getElementById('iframeModal')
  const iframe = iframeModal.querySelector('iframe')

  document.querySelectorAll('[data-iframe]').forEach((btn) => {
    btn.addEventListener('click', () => {
      iframe.src = btn.dataset.iframe
      iframeModal.classList.add('active')
      document.body.classList.add('modal-open')
    })
  })

  iframeModal.querySelector('.modal-overlay').onclick =
    iframeModal.querySelector('.close').onclick = () => {
      iframeModal.classList.remove('active')
      iframe.src = ''
      document.body.classList.remove('modal-open')
    }

  /* =============================
   * CRM MODAL
   * ============================= */
  const galleryModal = document.getElementById('galleryModal')

  document.querySelectorAll('[data-gallery]').forEach((btn) => {
    btn.onclick = () => {
      galleryModal.classList.add('active')
      document.body.classList.add('modal-open')
    }
  })

  galleryModal.querySelector('.close').onclick = () => {
    galleryModal.classList.remove('active')
    document.body.classList.remove('modal-open')
  }

  /* =============================
   * IMAGE ZOOM (CAPTURE MODE)
   * ============================= */
  const imageZoomModal = document.getElementById('imageZoomModal')
  const zoomedImage = document.getElementById('zoomedImage')

  document.addEventListener(
    'click',
    (e) => {
      const img = e.target.closest('.crm-gallery img')
      if (!img) return

      zoomedImage.src = img.src
      imageZoomModal.classList.add('active')
      document.body.classList.add('modal-open')
    },
    true,
  )

  imageZoomModal.querySelector('.modal-overlay').onclick =
    imageZoomModal.querySelector('.close').onclick = () => {
      imageZoomModal.classList.remove('active')
      zoomedImage.src = ''
      document.body.classList.remove('modal-open')
    }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      imageZoomModal.classList.remove('active')
      galleryModal.classList.remove('active')
      iframeModal.classList.remove('active')
      document.body.classList.remove('modal-open')
    }
  })

  const stickyHeader = document.getElementById('stickyHeader')
  const heroSection = document.querySelector('.hero')

  const observerStickyHeader = new IntersectionObserver(
    ([entry]) => {
      stickyHeader.classList.toggle('visible', !entry.isIntersecting)
    },
    { threshold: 0.2 },
  )

  observerStickyHeader.observe(heroSection)
})
