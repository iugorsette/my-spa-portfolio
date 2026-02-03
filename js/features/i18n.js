import { defaultLang, translations } from '../content.js'

const LANG_STORAGE_KEY = 'lang'

function normalizeLang(lang) {
  if (!lang) return null
  const lower = lang.toLowerCase()
  if (lower.startsWith('pt')) return 'pt-BR'
  if (lower.startsWith('en')) return 'en-US'
  return translations[lang] ? lang : null
}

function getInitialLang() {
  const params = new URLSearchParams(window.location.search)
  const queryLang = normalizeLang(params.get('lang'))
  if (queryLang) return queryLang

  const storedLang = normalizeLang(localStorage.getItem(LANG_STORAGE_KEY))
  if (storedLang) return storedLang

  return defaultLang
}

function getValue(lang, key) {
  const fallback = translations[defaultLang] || {}
  const selected = translations[lang] || fallback
  return selected[key] ?? fallback[key] ?? ''
}

function updateMeta(lang) {
  const title = getValue(lang, 'meta.title')
  const description = getValue(lang, 'meta.description')
  const ogTitle = getValue(lang, 'meta.og.title')
  const ogDescription = getValue(lang, 'meta.og.description')

  if (title) document.title = title

  const descriptionTag = document.querySelector('meta[name="description"]')
  if (descriptionTag && description) {
    descriptionTag.setAttribute('content', description)
  }

  const ogTitleTag = document.querySelector('meta[property="og:title"]')
  if (ogTitleTag && ogTitle) {
    ogTitleTag.setAttribute('content', ogTitle)
  }

  const ogDescriptionTag = document.querySelector(
    'meta[property="og:description"]',
  )
  if (ogDescriptionTag && ogDescription) {
    ogDescriptionTag.setAttribute('content', ogDescription)
  }
}

function updateYear() {
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()
}

function applyTranslations(lang) {
  document.documentElement.setAttribute('lang', lang)

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml
    const value = getValue(lang, key)
    if (value) el.innerHTML = value
  })

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (el.dataset.i18nHtml) return
    const key = el.dataset.i18n
    const value = getValue(lang, key)
    if (value) el.textContent = value
  })

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const key = el.dataset.i18nKey || el.dataset.i18n || el.dataset.i18nHtml
    if (!key) return

    const attrs = el.dataset.i18nAttr
      .split(',')
      .map((attr) => attr.trim())
      .filter(Boolean)

    attrs.forEach((attr) => {
      const attrValue =
        getValue(lang, `${key}.${attr}`) || getValue(lang, key)
      if (attrValue) el.setAttribute(attr, attrValue)
    })
  })

  const langToggle = document.getElementById('langToggle')
  if (langToggle) {
    langToggle.textContent = lang === 'pt-BR' ? 'PT' : 'EN'
  }

  updateMeta(lang)
  updateYear()
}

export function initI18n() {
  let currentLang = getInitialLang()

  const langToggle = document.getElementById('langToggle')
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'pt-BR' ? 'en-US' : 'pt-BR'
      localStorage.setItem(LANG_STORAGE_KEY, currentLang)
      applyTranslations(currentLang)
    })
  }

  applyTranslations(currentLang)
}
