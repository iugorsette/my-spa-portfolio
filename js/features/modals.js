export function initModals() {
  const modals = document.querySelectorAll('.modal')

  modals.forEach((modal) => {
    const closeBtns = modal.querySelectorAll('.close, .modal-overlay')

    closeBtns.forEach((btn) =>
      btn.addEventListener('click', () => closeModal(modal)),
    )
  })

  document.querySelectorAll('[data-gallery]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openModal(document.getElementById('galleryModal'))
    })
  })
}

function openModal(modal) {
  if (!modal) return
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeModal(modal) {
  modal.classList.remove('active')
  document.body.style.overflow = ''
}
