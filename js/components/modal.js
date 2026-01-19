export function initModals() {
  /* CRM MODAL */
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
}
