export function initTheme() {
  /* THEME — SYSTEM FIRST */
  const themeToggle = document.getElementById('themeToggle')
  if (!themeToggle) return
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
}
