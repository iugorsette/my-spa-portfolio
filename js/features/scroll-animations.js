/**
 * scroll-animations.js — teste de GSAP + ScrollTrigger
 *
 * Três técnicas diferentes de animação ao scroll, propositalmente separadas
 * para comparar:
 *
 *   A) MANIFESTO  → pin + scrub. A seção "trava" na tela e as palavras acendem
 *                   conforme o scroll. O progresso da animação é o progresso do
 *                   scroll (scrub), então dá pra voltar rolando pra cima.
 *
 *   B) TÍTULO DO SOBRE → mask reveal. Cada palavra vive dentro de um span com
 *                   overflow:hidden e sobe de yPercent 100 → 0. Dispara uma vez
 *                   ao entrar na viewport, com timing próprio (não é scrub).
 *
 *   C) PARÁGRAFOS DO SOBRE → scrub sem pin. Mesmo "acender palavras" do
 *                   manifesto, mas a seção rola normalmente. Mais discreto e
 *                   seguro no mobile.
 *
 * Para comparar com o site sem animação nenhuma: abra com ?anim=off na URL.
 *
 * Notas de integração com este projeto:
 *  - GSAP entra por <script> no index.html (site sem build/npm), então vem em
 *    window.gsap / window.ScrollTrigger. Se não carregar, tudo degrada para o
 *    estado estático — nada fica invisível.
 *  - o i18n reescreve innerHTML no toggle de idioma, o que apaga os spans de
 *    palavra. Por isso escutamos o evento 'i18n:change' e remontamos tudo.
 *  - as fontes carregam de forma assíncrona; quando trocam, as alturas mudam e
 *    os cálculos do ScrollTrigger ficam errados. Daí o refresh() no fonts.ready.
 */

const RAW_HTML = new WeakMap()

/** Estado das animações — devolvido por build() para poder ser destruído. */
let mediaQueries = null

function animationsDisabled() {
  return new URLSearchParams(window.location.search).get('anim') === 'off'
}

/**
 * Quebra o texto de `el` em palavras, preservando tags inline (<strong>,
 * <span class="accent">, <br />) porque só os nós de texto são trocados.
 *
 * @param {Element} el
 * @param {{ mask?: boolean }} options mask:true embrulha cada palavra em um
 *   container com overflow:hidden, habilitando o reveal deslizando de baixo.
 */
function splitWords(el, { mask = false } = {}) {
  // Idempotente. A presença de .word diz se o HTML atual é nosso (aí voltamos
  // ao original antes de quebrar de novo) ou se é HTML novo vindo do i18n —
  // nesse caso ele passa a ser o original.
  if (el.querySelector('.word') && RAW_HTML.has(el)) {
    el.innerHTML = RAW_HTML.get(el)
  } else {
    RAW_HTML.set(el, el.innerHTML)
  }

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  const textNodes = []
  while (walker.nextNode()) textNodes.push(walker.currentNode)

  textNodes.forEach((node) => {
    if (!node.textContent.trim()) return

    const frag = document.createDocumentFragment()

    // split com grupo de captura mantém os espaços na lista.
    node.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return

      if (!part.trim()) {
        frag.appendChild(document.createTextNode(' '))
        return
      }

      const word = document.createElement('span')
      word.className = 'word'
      word.textContent = part

      if (mask) {
        const wrapper = document.createElement('span')
        wrapper.className = 'word-mask'
        wrapper.appendChild(word)
        frag.appendChild(wrapper)
        return
      }

      frag.appendChild(word)
    })

    node.parentNode.replaceChild(frag, node)
  })

  return Array.from(el.querySelectorAll('.word'))
}

/** A) Seção manifesto: pin no desktop, scrub sempre. */
function buildManifesto(gsap, isDesktop) {
  const section = document.querySelector('.manifesto')
  if (!section) return

  const words = Array.from(section.querySelectorAll('.manifesto-line')).flatMap(
    (line) => splitWords(line),
  )
  if (!words.length) return

  const bar = section.querySelector('.manifesto-progress span')
  section.classList.add('is-animated')

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      scrub: 0.6,
      // No desktop a seção trava e a animação consome 140% de altura de tela.
      // No mobile isso vira scroll morto, então só acompanhamos a seção.
      ...(isDesktop
        ? { start: 'top top', end: '+=140%', pin: true, anticipatePin: 1 }
        : { start: 'top 80%', end: 'bottom 60%' }),
      onUpdate: (self) => {
        if (bar) bar.style.transform = `scaleX(${self.progress})`
      },
    },
  })

  timeline
    .fromTo(
      words,
      { opacity: 0.12, y: '0.3em' },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        duration: 0.6,
        // `amount` distribui o stagger num total fixo, então o ritmo não muda
        // quando a tradução tem mais ou menos palavras.
        stagger: { amount: 3 },
      },
    )
    // Uma última batida sem movimento: segura a frase inteira legível no fim
    // do pin, em vez de já começar a sair da tela.
    .to({}, { duration: 0.8 })

  return () => section.classList.remove('is-animated')
}

/** B) Título do Sobre: reveal com máscara, dispara uma vez ao entrar. */
function buildAboutTitle(gsap) {
  const title = document.querySelector('.about-text h3')
  if (!title) return

  const words = splitWords(title, { mask: true })
  if (!words.length) return

  gsap.from(words, {
    yPercent: 115,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.045,
    scrollTrigger: { trigger: title, start: 'top 85%', once: true },
  })
}

/** C) Parágrafos do Sobre: acender palavras com scrub, sem pin. */
function buildAboutParagraphs(gsap) {
  const paragraphs = Array.from(document.querySelectorAll('.about-text p'))
  if (!paragraphs.length) return

  const cleanups = paragraphs.map((paragraph) => {
    const words = splitWords(paragraph)
    if (!words.length) return () => {}

    paragraph.classList.add('is-animated')

    gsap.fromTo(
      words,
      { opacity: 0.18 },
      {
        opacity: 1,
        ease: 'none',
        duration: 0.5,
        stagger: { amount: 1.5 },
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 82%',
          end: 'bottom 55%',
          scrub: 0.4,
        },
      },
    )

    return () => paragraph.classList.remove('is-animated')
  })

  return () => cleanups.forEach((fn) => fn())
}

/** Cards de destaque + contador do "+5". */
function buildHighlights(gsap) {
  const group = document.querySelector('.about-highlights')
  if (!group) return

  gsap.from(group.querySelectorAll('.highlight'), {
    y: 28,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.12,
    scrollTrigger: { trigger: group, start: 'top 85%', once: true },
  })

  group.querySelectorAll('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count)
    if (!Number.isFinite(target)) return

    const prefix = el.dataset.countPrefix || ''
    const counter = { value: 0 }

    gsap.to(counter, {
      value: target,
      duration: 1.1,
      ease: 'power2.out',
      snap: { value: 1 },
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(counter.value)}`
      },
    })
  })
}

/**
 * Monta (ou remonta) todas as animações.
 *
 * gsap.matchMedia() é o que faz o trabalho chato: cada callback roda dentro de
 * um contexto próprio e o GSAP mata os triggers e reverte os estilos inline
 * sozinho quando a condição deixa de valer (resize, troca de reduced-motion).
 */
function build(gsap) {
  // kill(true) reverte os estilos que o GSAP escreveu, não só para os tweens.
  mediaQueries?.kill(true)
  mediaQueries = gsap.matchMedia()

  mediaQueries.add(
    {
      isDesktop: '(min-width: 769px)',
      isMobile: '(max-width: 768px)',
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isDesktop, reduceMotion } = context.conditions

      // Quem pediu menos movimento fica com o site estático — as classes
      // is-animated (que apagam as palavras via CSS) nunca entram.
      if (reduceMotion) return

      const cleanups = [
        buildManifesto(gsap, isDesktop),
        buildAboutTitle(gsap),
        buildAboutParagraphs(gsap),
        buildHighlights(gsap),
      ].filter(Boolean)

      return () => cleanups.forEach((fn) => fn())
    },
  )
}

export function initScrollAnimations() {
  const { gsap, ScrollTrigger } = window

  if (!gsap || !ScrollTrigger || animationsDisabled()) return

  gsap.registerPlugin(ScrollTrigger)
  build(gsap)

  // As fontes e as imagens mudam a altura da página depois do primeiro cálculo.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh())
  }
  window.addEventListener('load', () => ScrollTrigger.refresh())

  // O i18n reescreve innerHTML e leva os spans de palavra embora.
  document.addEventListener('i18n:change', () => {
    build(gsap)
    ScrollTrigger.refresh()
  })
}
