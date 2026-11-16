const areas = {
  'pt-BR': [
    { id: 'frontend', label: 'Frontend', copy: 'Interfaces, estado e experiência de uso.', items: [['Angular', 'Aplicações web estruturadas em componentes.', [['RxJS', 'Fluxos assíncronos e programação reativa.'], ['NgRx', 'Gerenciamento de estado no ecossistema Angular.'], ['Angular Router', 'Navegação entre páginas e áreas da aplicação.'], ['Reactive Forms', 'Formulários reativos e validação.'], ['Signals', 'Estado reativo no Angular.']]], ['React', 'Interfaces componentizadas para produtos digitais.'], ['TypeScript', 'Tipagem para aplicações mais previsíveis.'], ['HTML & CSS', 'Estrutura, estilos e interfaces responsivas.']] },
    { id: 'backend', label: 'Backend & APIs', copy: 'Serviços, regras de negócio e integração entre sistemas.', items: [['NestJS', 'Framework Node.js para serviços organizados e escaláveis.', [['Node.js', 'Runtime JavaScript para serviços e automações.'], ['REST APIs', 'Contratos para integração entre aplicações.'], ['Módulos', 'Organização do serviço por responsabilidades.'], ['Guards', 'Controle de acesso e autorização.'], ['Injeção de dependência', 'Composição de serviços e dependências.']]], ['Spring Boot', 'Aplicações e serviços no ecossistema Java.'], ['.NET', 'Desenvolvimento de serviços e sistemas de negócio.']] },
    { id: 'data', label: 'Dados & Cloud', copy: 'Persistência, infraestrutura e entrega contínua.', items: [['PostgreSQL', 'Modelagem relacional e persistência de dados.'], ['MongoDB', 'Persistência de documentos para aplicações.'], ['AWS', 'Serviços de nuvem para aplicações e infraestrutura.'], ['GCP', 'Plataforma de nuvem e serviços gerenciados.'], ['Vercel', 'Deploy e hospedagem de aplicações web.'], ['CI/CD', 'Automação de integração e entrega de software.']] },
    { id: 'mobile', label: 'Mobile & Automação', copy: 'Aplicativos multiplataforma e automação de fluxos.', items: [['Flutter', 'Aplicativos multiplataforma.'], ['React Native', 'Aplicativos móveis com React.'], ['Ionic', 'Aplicações móveis com tecnologias web.'], ['Python', 'Scripts e automações.'], ['Puppeteer', 'Automação de navegador e tarefas web.']] },
    { id: 'architecture', label: 'Arquitetura', copy: 'Sistemas distribuídos, cloud-native e orientados a eventos.', items: [['Microsserviços', 'Serviços menores organizados por responsabilidades.'], ['Distribuídos', 'Sistemas compostos por serviços que colaboram.'], ['Cloud Native', 'Soluções desenhadas para operar em nuvem.'], ['Serverless', 'Serviços gerenciados e execução sob demanda.'], ['Event-Driven', 'Integração e processamento orientados a eventos.'], ['DevSecOps', 'Segurança integrada ao ciclo de entrega.'], ['Zero Trust', 'Verificação contínua de acesso.'], ['Observabilidade', 'Métricas, logs e traces para entender sistemas.']] },
    { id: 'engineering', label: 'Engenharia', copy: 'Da definição técnica à operação e evolução do produto.', items: [['Fullstack', 'Atuação de interface a serviços e dados.'], ['Integrações', 'Conexão entre sistemas, APIs e serviços externos.'], ['SaaS & sistemas internos', 'Produtos digitais e ferramentas de negócio.'], ['Modelagem de dados', 'Estruturação de dados alinhada às regras do produto.'], ['Operação em produção', 'Entrega, acompanhamento e evolução de sistemas.'], ['Qualidade de software', 'Manutenibilidade, confiabilidade e resultado.'], ['Decisões técnicas', 'Escolhas de arquitetura alinhadas ao problema.']] },
  ],
  'en-US': [
    { id: 'frontend', label: 'Frontend', copy: 'Interfaces, state, and user experience.', items: [['Angular', 'Component-based web applications.', [['RxJS', 'Asynchronous flows and reactive programming.'], ['NgRx', 'State management in the Angular ecosystem.'], ['Angular Router', 'Navigation between application pages and areas.'], ['Reactive Forms', 'Reactive forms and validation.'], ['Signals', 'Reactive state in Angular.']]], ['React', 'Component-driven interfaces for digital products.'], ['TypeScript', 'Types for more predictable applications.'], ['HTML & CSS', 'Structure, styles, and responsive interfaces.']] },
    { id: 'backend', label: 'Backend & APIs', copy: 'Services, business rules, and system integration.', items: [['NestJS', 'Node.js framework for structured, scalable services.', [['Node.js', 'JavaScript runtime for services and automation.'], ['REST APIs', 'Contracts for application integration.'], ['Modules', 'Organizing services by responsibility.'], ['Guards', 'Access control and authorization.'], ['Dependency injection', 'Composing services and dependencies.']]], ['Spring Boot', 'Applications and services in the Java ecosystem.'], ['.NET', 'Development of services and business systems.']] },
    { id: 'data', label: 'Data & Cloud', copy: 'Persistence, infrastructure, and continuous delivery.', items: [['PostgreSQL', 'Relational modeling and data persistence.'], ['MongoDB', 'Document storage for applications.'], ['AWS', 'Cloud services for applications and infrastructure.'], ['GCP', 'Cloud platform and managed services.'], ['Vercel', 'Deployment and hosting for web applications.'], ['CI/CD', 'Automated software integration and delivery.']] },
    { id: 'mobile', label: 'Mobile & Automation', copy: 'Cross-platform apps and workflow automation.', items: [['Flutter', 'Cross-platform applications.'], ['React Native', 'Mobile applications with React.'], ['Ionic', 'Mobile applications built with web technologies.'], ['Python', 'Scripts and automation.'], ['Puppeteer', 'Browser and web task automation.']] },
    { id: 'architecture', label: 'Architecture', copy: 'Distributed, cloud-native, and event-driven system design.', items: [['Microservices', 'Smaller services organized by responsibility.'], ['Distributed systems', 'Systems made of collaborating services.'], ['Cloud Native', 'Solutions designed to run in the cloud.'], ['Serverless', 'Managed services and on-demand execution.'], ['Event-Driven', 'Event-based integration and processing.'], ['DevSecOps', 'Security integrated into the delivery lifecycle.'], ['Zero Trust', 'Continuous access verification.'], ['Observability', 'Metrics, logs, and traces to understand systems.']] },
    { id: 'engineering', label: 'Engineering', copy: 'From technical design to product operation and evolution.', items: [['Fullstack', 'Work across interfaces, services, and data.'], ['Integrations', 'Connecting systems, APIs, and external services.'], ['SaaS & internal tools', 'Digital products and business tools.'], ['Data modeling', 'Structuring data around product rules.'], ['Production operations', 'Shipping, monitoring, and evolving systems.'], ['Software quality', 'Maintainability, reliability, and outcomes.'], ['Technical decisions', 'Architecture choices aligned with the problem.']] },
  ],
}

const svgNS = 'http://www.w3.org/2000/svg'
const homePoints = {
  frontend: [0.68, 0.26], backend: [0.79, 0.24], data: [0.92, 0.28],
  architecture: [0.83, 0.44], engineering: [0.73, 0.65], mobile: [0.62, 0.82],
}
const branchJitter = [-0.2, 0.16, -0.11, 0.23, -0.18, 0.12, -0.08, 0.19]

function svgElement(name, attrs = {}, text = '') {
  const element = document.createElementNS(svgNS, name)
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value))
  if (text) element.textContent = text
  return element
}

function activateWithKeyboard(element, callback) {
  element.addEventListener('click', callback)
  element.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    callback()
  })
}

export function initHeroTechMap() {
  const hero = document.querySelector('.hero-parallax')
  const focus = document.getElementById('techMapFocus')
  const svg = document.getElementById('heroTechMap')
  if (!hero || !focus || !svg) return

  const pointButtons = [...document.querySelectorAll('.hero-skill-point')]
  const expandedAreas = new Set()
  const expandedBranches = new Set()
  let selectedSkillKey = null
  let returnFocus = null

  const getAreas = () => areas[document.documentElement.lang === 'en-US' ? 'en-US' : 'pt-BR']
  const dimensions = () => ({ width: hero.clientWidth, height: hero.clientHeight })
  const getHomePosition = (id) => {
    const { width, height } = dimensions()
    const [x, y] = homePoints[id]
    return [x * width, y * height]
  }

  const updatePointLabels = () => {
    const activeAreas = getAreas()
    pointButtons.forEach((button) => {
      const area = activeAreas.find(({ id }) => id === button.dataset.mapCategory)
      if (!area) return
      button.querySelector('.point-label').textContent = area.label
      button.setAttribute('aria-label', area.label)
      if (!button.hasAttribute('aria-expanded')) button.setAttribute('aria-expanded', 'false')
    })
  }

  const createBranch = (area, item, parent, index, count, level = 0, parentNode = null, specs = []) => {
    const [label, description, children] = item
    const { width } = dimensions()
    const nodeWidth = Math.min(210, width * 0.42, Math.max(116, label.length * 7.2 + 34))
    const nodeHeight = 36 + index % 3 * 5
    const key = `${area.id}:${label}`
    const isOpen = expandedBranches.has(key)
    const spec = { area, item, parent, parentNode, index, count, level, key, label, description, children, nodeWidth, nodeHeight }
    specs.push(spec)
    if (children?.length && isOpen) children.forEach((child, childIndex) => createBranch(area, child, null, childIndex, children.length, level + 1, spec, specs))
    return spec
  }

  const desiredPosition = (spec, width, height) => {
    const parent = spec.parentNode ? [spec.parentNode.x, spec.parentNode.y] : spec.parent
    const inward = Math.atan2(height / 2 - parent[1], width / 2 - parent[0])
    const spread = spec.count === 1 ? 0 : -1.12 + (2.24 * spec.index) / (spec.count - 1)
    const angle = inward + spread + branchJitter[spec.index % branchJitter.length]
    const radius = Math.min(195, Math.max(118, Math.min(width, height) * 0.24)) * (0.88 + (spec.index % 4) * 0.08)
    return [parent[0] + Math.cos(angle) * radius, parent[1] + Math.sin(angle) * radius]
  }

  const solvePositions = (specs, obstacles, width, height) => {
    specs.forEach((spec) => {
      spec.desired = desiredPosition(spec, width, height)
      spec.x = spec.desired[0]
      spec.y = spec.desired[1]
    })

    const gap = 12
    for (let pass = 0; pass < 150; pass += 1) {
      specs.forEach((spec) => {
        const desired = desiredPosition(spec, width, height)
        spec.x += (desired[0] - spec.x) * 0.035
        spec.y += (desired[1] - spec.y) * 0.035
        spec.x = Math.max(spec.nodeWidth / 2 + 10, Math.min(width - spec.nodeWidth / 2 - 10, spec.x))
        spec.y = Math.max(spec.nodeHeight / 2 + 12, Math.min(height - spec.nodeHeight / 2 - 16, spec.y))
      })

      const separate = (a, b, fixed = false) => {
        const dx = a.x - b.x
        const dy = a.y - b.y
        const bWidth = b.nodeWidth ?? b.width
        const bHeight = b.nodeHeight ?? b.height
        const overlapX = (a.nodeWidth + bWidth) / 2 + gap - Math.abs(dx)
        const overlapY = (a.nodeHeight + bHeight) / 2 + gap - Math.abs(dy)
        if (overlapX <= 0 || overlapY <= 0) return
        const signX = dx === 0 ? (specs.indexOf(a) % 2 ? 1 : -1) : Math.sign(dx)
        const signY = dy === 0 ? 1 : Math.sign(dy)
        if (overlapX < overlapY) a.x += signX * (fixed ? overlapX : overlapX / 2)
        else a.y += signY * (fixed ? overlapY : overlapY / 2)
      }

      specs.forEach((spec, index) => {
        for (let other = index + 1; other < specs.length; other += 1) separate(spec, specs[other])
        obstacles.forEach((obstacle) => separate(spec, obstacle, true))
      })
      specs.forEach((spec) => {
        spec.x = Math.max(spec.nodeWidth / 2 + 10, Math.min(width - spec.nodeWidth / 2 - 10, spec.x))
        spec.y = Math.max(spec.nodeHeight / 2 + 12, Math.min(height - spec.nodeHeight / 2 - 16, spec.y))
      })
    }
  }

  const render = () => {
    const activeAreas = getAreas()
    const { width, height } = dimensions()
    const focusedNodeId = svg.contains(document.activeElement) ? document.activeElement.dataset.nodeId : null
    svg.replaceChildren()
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`)

    const specs = []
    const obstacles = []
    activeAreas.forEach((area) => {
      const point = pointButtons.find((button) => button.dataset.mapCategory === area.id)
      if (point) {
        const heroBounds = hero.getBoundingClientRect()
        const pointBounds = point.getBoundingClientRect()
        const position = [pointBounds.left - heroBounds.left + pointBounds.width / 2, pointBounds.top - heroBounds.top + pointBounds.height / 2]
        let left = pointBounds.left - heroBounds.left
        let right = left + pointBounds.width
        let top = pointBounds.top - heroBounds.top
        let bottom = top + pointBounds.height
        if (expandedAreas.has(area.id)) {
          const label = point.querySelector('.point-label')?.getBoundingClientRect()
          if (label) {
            left = Math.min(left, label.left - heroBounds.left)
            right = Math.max(right, label.right - heroBounds.left)
            top = Math.min(top, label.top - heroBounds.top)
            bottom = Math.max(bottom, label.bottom - heroBounds.top)
          }
        }
        obstacles.push({ x: (left + right) / 2, y: (top + bottom) / 2, width: right - left, height: bottom - top })
        if (expandedAreas.has(area.id)) area.items.forEach((item, index) => createBranch(area, item, position, index, area.items.length, 0, null, specs))
      }
    })

    solvePositions(specs, obstacles, width, height)
    specs.forEach((spec, index) => {
      const parent = spec.parentNode ? [spec.parentNode.x, spec.parentNode.y] : spec.parent
      const startX = parent[0]
      const startY = parent[1]
      const endX = spec.x
      const endY = spec.y
      const bend = Math.min(64, Math.hypot(endX - startX, endY - startY) * 0.32)
      const angle = Math.atan2(endY - startY, endX - startX)
      const path = svgElement('path', {
        d: `M ${startX} ${startY} Q ${startX + Math.cos(angle) * bend} ${startY + Math.sin(angle) * bend} ${endX} ${endY}`,
        class: 'focus-map-edge',
        style: `--edge-delay:${Math.min(index * 24, 420)}ms`,
      })
      svg.append(path)

      const group = svgElement('g', {
        class: `focus-map-node focus-map-skill${spec.level ? ' is-nested' : ''}${expandedBranches.has(spec.key) ? ' is-expanded' : ''}${selectedSkillKey === spec.key ? ' is-selected' : ''}`,
        transform: `translate(${spec.x - spec.nodeWidth / 2} ${spec.y - spec.nodeHeight / 2})`,
        tabindex: '0', role: 'button', 'data-node-id': spec.key,
        'aria-label': `${spec.label}: ${spec.description}`,
        'aria-expanded': String(Boolean(spec.children?.length && expandedBranches.has(spec.key))),
        style: `--node-delay:${Math.min(index * 24, 420)}ms`,
      })
      group.append(svgElement('rect', { width: spec.nodeWidth, height: spec.nodeHeight, rx: spec.nodeHeight / 2 }))
      group.append(svgElement('circle', { class: 'focus-node-dot', cx: spec.nodeWidth - 14, cy: spec.nodeHeight / 2, r: 3.5 }))
      const text = svgElement('text', { x: 15, y: spec.nodeHeight / 2 + 5 }, spec.label)
      text.setAttribute('textLength', String(Math.max(40, spec.nodeWidth - 42)))
      text.setAttribute('lengthAdjust', 'spacingAndGlyphs')
      group.append(text)
      activateWithKeyboard(group, () => {
        if (spec.children?.length) {
          if (expandedBranches.has(spec.key)) expandedBranches.delete(spec.key)
          else expandedBranches.add(spec.key)
        } else selectedSkillKey = selectedSkillKey === spec.key ? null : spec.key
        render()
      })
      svg.append(group)
    })

    if (focusedNodeId) {
      [...svg.querySelectorAll('[data-node-id]')]
        .find((node) => node.dataset.nodeId === focusedNodeId)
        ?.focus({ preventScroll: true })
    }
  }

  const toggleArea = (id) => {
    if (expandedAreas.has(id)) expandedAreas.delete(id)
    else expandedAreas.add(id)
    pointButtons.forEach((button) => {
      const isExpanded = expandedAreas.has(button.dataset.mapCategory)
      button.classList.toggle('is-active', isExpanded)
      button.setAttribute('aria-expanded', String(isExpanded))
    })
    render()
  }

  const openMap = (id, trigger) => {
    if (hero.classList.contains('map-active')) {
      toggleArea(id)
      return
    }
    expandedAreas.clear()
    expandedBranches.clear()
    selectedSkillKey = null
    expandedAreas.add(id)
    returnFocus = trigger
    pointButtons.forEach((button) => {
      const selected = button.dataset.mapCategory === id
      button.classList.toggle('is-active', selected)
      button.setAttribute('aria-expanded', String(selected))
    })
    hero.classList.add('map-active')
    focus.hidden = false
    focus.setAttribute('aria-hidden', 'false')
    document.documentElement.classList.add('tech-map-active')
    document.querySelectorAll('body > header, main > :not(.hero)').forEach((element) => { element.inert = true })
    const bounds = trigger.getBoundingClientRect()
    focus.style.setProperty('--origin-x', `${bounds.left + bounds.width / 2 - hero.getBoundingClientRect().left}px`)
    focus.style.setProperty('--origin-y', `${bounds.top + bounds.height / 2 - hero.getBoundingClientRect().top}px`)
    render()
    window.setTimeout(() => {
      if (!focus.hidden) document.querySelector('[data-map-close]')?.focus({ preventScroll: true })
    }, 450)
  }

  const closeMap = () => {
    focus.hidden = true
    focus.setAttribute('aria-hidden', 'true')
    hero.classList.remove('map-active')
    document.documentElement.classList.remove('tech-map-active')
    document.querySelectorAll('body > header, main > :not(.hero)').forEach((element) => { element.inert = false })
    expandedAreas.clear()
    expandedBranches.clear()
    pointButtons.forEach((button) => {
      button.classList.remove('is-active')
      button.setAttribute('aria-expanded', 'false')
    })
    render()
    returnFocus?.focus({ preventScroll: true })
  }

  pointButtons.forEach((button) => activateWithKeyboard(button, () => openMap(button.dataset.mapCategory, button)))
  focus.querySelector('[data-map-close]')?.addEventListener('click', closeMap)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !focus.hidden) closeMap()
  })
  window.addEventListener('resize', () => { if (!focus.hidden) render() })
  document.addEventListener('i18n:change', () => {
    updatePointLabels()
    if (!focus.hidden) render()
  })
  updatePointLabels()
}
