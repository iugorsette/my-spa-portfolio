export function initModals() {
  /* CRM MODAL */
  const galleryModal = document.getElementById('galleryModal')

  document.querySelectorAll('[data-gallery]').forEach((btn) => {
    btn.onclick = () => {
      galleryModal.classList.add('active')
      lockScroll()
    }
  })

  galleryModal.querySelector('.close').onclick = () => {
    galleryModal.classList.remove('active')
    unlockScroll()
  }

  /* IMAGE ZOOM (CAPTURE MODE) */
  const imageZoomModal = document.getElementById('imageZoomModal')
  const zoomedImage = document.getElementById('zoomedImage')

  document.addEventListener(
    'click',
    (e) => {
      const img = e.target.closest('.crm-gallery img')
      if (!img) return

      zoomedImage.src = img.src
      imageZoomModal.classList.add('active')
      lockScroll()
    },
    true,
  )

  imageZoomModal.querySelector('.modal-overlay').onclick =
    imageZoomModal.querySelector('.close').onclick = () => {
      imageZoomModal.classList.remove('active')
      zoomedImage.src = ''
      unlockScroll()
    }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      imageZoomModal.classList.remove('active')
      galleryModal.classList.remove('active')
      iframeModal.classList.remove('active')
      unlockScroll()
    }
  })

  let scrollY = 0

  function lockScroll() {
    scrollY = window.scrollY
    document.body.style.top = `-${scrollY}px`
    document.body.classList.add('modal-open')
  }

  function unlockScroll() {
    document.body.classList.remove('modal-open')
    document.body.style.top = ''
    window.scrollTo(0, scrollY)
  }
}
