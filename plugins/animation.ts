import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const atrr = entry.target.getAttribute('data-animate-delay')
            setTimeout(() => {
              // is-animate - запустить анимацию, название подходящей анимации хранится в "data-animate"
              entry.target.classList.add('is-animate')
              // если не мобильное устройство delay отрабатывает
            }, Number(window.innerWidth > 767 ? atrr : 0))

            observer.unobserve(entry.target)
          }
        })
      }
      // { threshold: 0.5 }
    )

    nuxtApp.hook('page:start', () => {
      observer.disconnect()
    })

    nuxtApp.hook('page:finish', () => {
      if (window.innerWidth >= 1440) {
        setTimeout(() => {
          document
            // селектор к которому привязывается анимация
            .querySelectorAll('[data-animate]')
            .forEach((animate) => observer.observe(animate))
        }, 100)
      }
    })
  }
})
