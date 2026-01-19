import { onIntersect } from '../core/observer.js'

export function initCanvasBackgrounds() {
  document.querySelectorAll('.with-canvas').forEach((section) => {
    const canvas = section.querySelector('.bg-canvas')
    if (!canvas) return

    onIntersect(section, () => startCanvas(canvas, section))
  })
}

function startCanvas(canvas, section) {
  const ctx = canvas.getContext('2d')

  let w, h
  function resize() {
    w = canvas.width = section.offsetWidth
    h = canvas.height = section.offsetHeight
  }

  resize()
  window.addEventListener('resize', resize)

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

  function animate() {
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
}
