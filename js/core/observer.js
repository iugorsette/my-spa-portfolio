export function onIntersect(el, cb) {
  new IntersectionObserver(([e], o) => {
    if (e.isIntersecting) {
      cb()
      o.disconnect()
    }
  }).observe(el)
}