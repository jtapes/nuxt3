import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  function delay(ms: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, ms)
    })
  }

  if (process.client) {
    window.addEventListener('mousemove', (e) => {
      const centerX = e.clientX - window.innerWidth / 2
      const centerY = e.clientY - window.innerWidth / 2
      // document.body.style.cssText += `--cursorX: ${e.clientX}px`
      // document.body.style.cssText += `--cursorY: ${e.clientY}px`
      document.body.style.cssText += `--cursorYTop: ${e.pageY}px`
      document.body.style.cssText += `--cursorXCenter: ${centerX}px`
      document.body.style.cssText += `--cursorYCenter: ${centerY}px`
      // document.body.style.cssText += `--cursorXCenterDeg: ${center / 100}deg`
    })
    window.addEventListener('scroll', () => {})
    document.body.style.cssText += `--widthScreen: ${window.innerWidth}px`
    window.addEventListener('resize', () => {
      document.body.style.cssText += `--widthScreen: ${window.innerWidth}px`
    })

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delayAtr = el.getAttribute('data-animate-delay')
            const animateClass = el.getAttribute('data-animate')
            if (!animateClass || animateClass === '') return

            setTimeout(async () => {
              el.classList.add(animateClass)

              if (['a-header'].includes(animateClass)) {
                const arrWorld = String(el.textContent).split(' ')
                let html = ''
                arrWorld.forEach((world) => {
                  const arrSymbols = world.split('')
                  const strSymbols = arrSymbols
                    .map(
                      (sb) =>
                        `<span class="s">${sb === ' ' ? '&nbsp;' : sb}</span>`
                    )
                    .join('')
                  const strWorld = `<span class="w">${strSymbols}</span>&nbsp;`
                  html += strWorld
                })
                el.innerHTML = html

                // const arrSymbols = el.textContent.split('')
                // el.innerHTML = arrSymbols.map((sb) => `<span>${sb === ' ' ? '&nbsp;' : sb}</span>`).join('');
                const elSpans = [...el.querySelectorAll('span.s')]
                for (const span of elSpans) {
                  await delay(50)
                  span.classList.add('a')
                }
              }
            }, Number(window.innerWidth > 767 && delayAtr ? Number(delayAtr) : 0))
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
      // if (window.innerWidth >= 1440) {
      setTimeout(() => {
        document
          // селектор к которому привязывается анимация
          .querySelectorAll('[data-animate]')
          .forEach((animate) => observer.observe(animate))
      }, 100)
      // }
    })
  }
})
