export function initModals() {
  const galleryModal = document.getElementById('galleryModal')
  const imageZoomModal = document.getElementById('imageZoomModal')
  const iframeModal = document.getElementById('iframeModal')
  const zoomedImage = document.getElementById('zoomedImage')
  const zoomViewport = document.getElementById('zoomViewport')
  const zoomStage = imageZoomModal?.querySelector('.zoom-stage')
  const zoomCaption = document.getElementById('zoomCaption')
  const zoomCounter = document.getElementById('zoomCounter')
  const previousButton = imageZoomModal?.querySelector('[data-zoom-prev]')
  const nextButton = imageZoomModal?.querySelector('[data-zoom-next]')
  const crmImages = [...document.querySelectorAll('.crm-gallery img')]

  let scrollY = 0
  let currentImageIndex = 0
  let scale = 1
  let panX = 0
  let panY = 0
  let isDragging = false
  let activePointerId = null
  let dragStartX = 0
  let dragStartY = 0
  let dragOriginPanX = 0
  let dragOriginPanY = 0

  const activeModalExists = () => Boolean(document.querySelector('.modal.active'))
  const isMobilePortrait = () => window.matchMedia('(max-width: 768px) and (orientation: portrait)').matches
  const isMobileLandscape = () => window.matchMedia('(max-width: 768px) and (orientation: landscape)').matches

  const lockScroll = () => {
    if (document.body.classList.contains('modal-open')) return

    scrollY = window.scrollY
    document.body.style.top = `-${scrollY}px`
    document.body.classList.add('modal-open')
    document.documentElement.classList.add('modal-open')
  }

  const unlockScroll = () => {
    if (activeModalExists()) return

    document.body.classList.remove('modal-open')
    document.documentElement.classList.remove('modal-open')
    document.body.style.top = ''
    window.scrollTo(0, scrollY)
  }

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

  const getPanBounds = () => {
    if (!zoomViewport || !zoomedImage) {
      return { x: 0, y: 0 }
    }

    const viewportRect = zoomViewport.getBoundingClientRect()
    const scaledWidth = zoomedImage.clientWidth * scale
    const scaledHeight = zoomedImage.clientHeight * scale

    return {
      x: Math.max((scaledWidth - viewportRect.width) / 2, 0),
      y: Math.max((scaledHeight - viewportRect.height) / 2, 0),
    }
  }

  const applyZoomTransform = () => {
    if (!zoomedImage) return

    const bounds = getPanBounds()
    panX = clamp(panX, -bounds.x, bounds.x)
    panY = clamp(panY, -bounds.y, bounds.y)

    zoomedImage.style.setProperty('--zoom-scale', String(scale))
    zoomedImage.style.setProperty('--pan-x', `${panX}px`)
    zoomedImage.style.setProperty('--pan-y', `${panY}px`)

    if (zoomViewport) {
      zoomViewport.classList.toggle('is-draggable', scale > 1.01)
    }
  }

  const syncZoomMode = () => {
    if (!imageZoomModal) return

    const portrait = isMobilePortrait()
    const landscape = isMobileLandscape()

    imageZoomModal.dataset.mobilePortrait = portrait ? 'true' : 'false'
    imageZoomModal.dataset.mobileLandscape = landscape ? 'true' : 'false'

    scale = portrait ? 1.85 : 1
    panX = 0
    panY = 0
    applyZoomTransform()
  }

  const stopDragging = () => {
    if (!isDragging) return

    isDragging = false
    activePointerId = null
    zoomStage?.classList.remove('is-dragging')
  }

  const openModal = (modal) => {
    if (!modal) return
    modal.classList.add('active')
    lockScroll()
  }

  const closeModal = (modal) => {
    if (!modal) return
    modal.classList.remove('active')

    if (modal === galleryModal) {
      imageZoomModal?.classList.remove('active')
    }

    if (modal === imageZoomModal && zoomedImage) {
      stopDragging()
      zoomedImage.removeAttribute('src')
      scale = 1
      panX = 0
      panY = 0
      applyZoomTransform()
    }

    unlockScroll()
  }

  const renderZoomImage = () => {
    const currentImage = crmImages[currentImageIndex]
    if (!currentImage || !zoomedImage) return

    stopDragging()
    zoomedImage.src = currentImage.currentSrc || currentImage.src
    zoomedImage.alt = currentImage.alt

    if (zoomCaption) {
      zoomCaption.textContent = currentImage.alt
    }

    if (zoomCounter) {
      zoomCounter.textContent = `${currentImageIndex + 1} / ${crmImages.length}`
    }

    previousButton && (previousButton.disabled = crmImages.length <= 1)
    nextButton && (nextButton.disabled = crmImages.length <= 1)

    syncZoomMode()
    requestAnimationFrame(() => requestAnimationFrame(applyZoomTransform))
  }

  const openZoom = (index) => {
    currentImageIndex = index
    renderZoomImage()
    openModal(imageZoomModal)
  }

  const showPreviousImage = () => {
    if (!crmImages.length) return
    currentImageIndex = (currentImageIndex - 1 + crmImages.length) % crmImages.length
    renderZoomImage()
  }

  const showNextImage = () => {
    if (!crmImages.length) return
    currentImageIndex = (currentImageIndex + 1) % crmImages.length
    renderZoomImage()
  }

  document.querySelectorAll('[data-gallery]').forEach((button) => {
    button.addEventListener('click', () => openModal(galleryModal))
  })

  ;[galleryModal, imageZoomModal, iframeModal].forEach((modal) => {
    if (!modal) return

    modal.querySelectorAll('.close, .modal-overlay').forEach((element) => {
      element.addEventListener('click', () => closeModal(modal))
    })

    modal.querySelectorAll('.modal-box, .zoom-box').forEach((box) => {
      box.addEventListener('click', (event) => event.stopPropagation())
    })
  })

  crmImages.forEach((image, index) => {
    image.tabIndex = 0
    image.setAttribute('role', 'button')

    image.addEventListener('click', () => openZoom(index))
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openZoom(index)
      }
    })
  })

  previousButton?.addEventListener('click', showPreviousImage)
  nextButton?.addEventListener('click', showNextImage)

  zoomedImage?.addEventListener('load', () => {
    if (!imageZoomModal?.classList.contains('active')) return
    syncZoomMode()
    requestAnimationFrame(() => requestAnimationFrame(applyZoomTransform))
  })

  zoomViewport?.addEventListener('pointerdown', (event) => {
    if (scale <= 1.01) return
    if (event.pointerType === 'mouse' && event.button !== 0) return

    isDragging = true
    activePointerId = event.pointerId
    dragStartX = event.clientX
    dragStartY = event.clientY
    dragOriginPanX = panX
    dragOriginPanY = panY

    zoomStage?.classList.add('is-dragging')
    zoomViewport.setPointerCapture?.(event.pointerId)
    event.preventDefault()
  })

  zoomViewport?.addEventListener('pointermove', (event) => {
    if (!isDragging || event.pointerId !== activePointerId) return

    panX = dragOriginPanX + (event.clientX - dragStartX)
    panY = dragOriginPanY + (event.clientY - dragStartY)
    applyZoomTransform()
  })

  zoomViewport?.addEventListener('pointerup', stopDragging)
  zoomViewport?.addEventListener('pointercancel', stopDragging)
  zoomViewport?.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') {
      stopDragging()
    }
  })

  window.addEventListener('resize', () => {
    if (!imageZoomModal?.classList.contains('active')) return
    syncZoomMode()
    requestAnimationFrame(applyZoomTransform)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (imageZoomModal?.classList.contains('active')) {
        closeModal(imageZoomModal)
        return
      }

      if (galleryModal?.classList.contains('active')) {
        closeModal(galleryModal)
        return
      }

      if (iframeModal?.classList.contains('active')) {
        closeModal(iframeModal)
      }
    }

    if (!imageZoomModal?.classList.contains('active')) return

    if (event.key === 'ArrowLeft') {
      showPreviousImage()
    }

    if (event.key === 'ArrowRight') {
      showNextImage()
    }
  })
}
