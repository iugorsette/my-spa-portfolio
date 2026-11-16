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

  const addBranch = (area, item, parent, index, count, level = 0) => {
    const [label, description, children] = item
    const { width, height } = dimensions()
    const inward = Math.atan2(height / 2 - parent[1], width / 2 - parent[0])
    const spread = count === 1 ? 0 : -1.15 + (2.3 * index) / (count - 1)
    const angle = inward + spread + branchJitter[index % branchJitter.length]
    const radius = Math.min(185, Math.max(112, Math.min(width, height) * 0.23)) * (0.88 + (index % 4) * 0.08)
    const nodeWidth = Math.min(210, Math.max(116, label.length * 7.2 + 34))
    const nodeHeight = 36 + index % 3 * 5
    const position = [
      Math.max(nodeWidth / 2 + 12, Math.min(width - nodeWidth / 2 - 12, parent[0] + Math.cos(angle) * radius)),
      Math.max(nodeHeight / 2 + 14, Math.min(height - nodeHeight / 2 - 22, parent[1] + Math.sin(angle) * radius)),
    ]
    const bend = (index % 2 ? 1 : -1) * (20 + index % 3 * 15)
    const middleX = (parent[0] + position[0]) / 2
    svg.append(svgElement('path', {
      class: 'focus-map-edge',
      d: `M ${parent[0]} ${parent[1]} C ${middleX + bend} ${parent[1] + bend}, ${middleX - bend} ${position[1] - bend}, ${position[0]} ${position[1]}`,
      pathLength: '1',
      style: `--edge-delay:${index * 35}ms;--edge-width:${1 + index % 4 * 0.28}`,
    }))

    const key = `${area.id}:${label}`
    const isOpen = expandedBranches.has(key)
    const node = svgElement('g', {
      class: `focus-map-node focus-map-skill${isOpen ? ' is-expanded' : ''}${selectedSkillKey === key ? ' is-selected' : ''}${level ? ' is-nested' : ''}`,
      transform: `translate(${position[0] - nodeWidth / 2} ${position[1] - nodeHeight / 2})`,
      role: 'button',
      tabindex: '0',
      'aria-label': `${label}. ${description}`,
      'aria-expanded': String(Boolean(children?.length && isOpen)),
      'aria-pressed': String(selectedSkillKey === key),
      'data-node-id': `skill:${key}`,
      style: `--node-delay:${index * 35}ms`,
    })
    node.append(svgElement('rect', { width: nodeWidth, height: nodeHeight, rx: '16' }))
    node.append(svgElement('text', { x: '15', y: String(nodeHeight / 2 + 6), textLength: String(nodeWidth - 36), lengthAdjust: 'spacingAndGlyphs' }, label))
    if (children?.length) node.append(svgElement('circle', { class: 'focus-node-dot', cx: String(nodeWidth - 13), cy: String(nodeHeight / 2), r: '3' }))
    svg.append(node)
    activateWithKeyboard(node, () => {
      if (children?.length) {
        if (expandedBranches.has(key)) expandedBranches.delete(key)
        else expandedBranches.add(key)
      } else {
        selectedSkillKey = key
      }
      render()
    })

    if (children?.length && isOpen) {
      children.forEach((child, childIndex) => addBranch(area, child, position, childIndex, children.length, level + 1))
    }
  }

  const render = () => {
    const activeAreas = getAreas()
    const { width, height } = dimensions()
    const focusedNodeId = svg.contains(document.activeElement) ? document.activeElement.dataset.nodeId : null
    svg.replaceChildren()
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`)

    activeAreas.forEach((area) => {
      const point = pointButtons.find((button) => button.dataset.mapCategory === area.id)
      if (expandedAreas.has(area.id) && point) {
        const heroBounds = hero.getBoundingClientRect()
        const pointBounds = point.getBoundingClientRect()
        const position = [pointBounds.left - heroBounds.left + pointBounds.width / 2, pointBounds.top - heroBounds.top + pointBounds.height / 2]
        area.items.forEach((item, index) => addBranch(area, item, position, index, area.items.length))
      }
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
