export function initGallery() {
  const zoomModal = document.getElementById('imageZoomModal')
  const zoomedImage = document.getElementById('zoomedImage')

  if (!zoomModal || !zoomedImage) return

  document.querySelectorAll('.crm-gallery img').forEach((img) => {
    img.addEventListener('click', () => {
      zoomedImage.src = img.src
      zoomModal.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  })

  zoomModal.querySelector('.close').addEventListener('click', () => {
    zoomModal.classList.remove('active')
    document.body.style.overflow = ''
  })
}
