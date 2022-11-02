class Reverse {
  scrollPosition: number = 0
  el: HTMLElement | null = null
  blocks: HTMLElement[] = []
  classActive: string = ''
  handleEvent() {
    const scrollPosition = window.scrollY
    const el = this.el
    const blocks = this.blocks
    const classActive = this.classActive
    if (el) {
      const elementPositionStart = el.offsetTop + scrollPosition
      const elementPositionEnd = el.offsetTop + scrollPosition + el.clientHeight

      for (const block of blocks) {
        if (block.getAttribute('reverse-block') !== 'true') continue
        const blockStartPosition = block.offsetTop
        const blockEndPosition = block.offsetTop + block.clientHeight
        if (
          (elementPositionStart >= blockStartPosition &&
            elementPositionStart <= blockEndPosition) ||
          (elementPositionEnd >= blockStartPosition &&
            elementPositionEnd <= blockEndPosition)
        ) {
          el.classList.add(classActive)
          break
        } else {
          el.classList.remove(classActive)
        }
      }
    }
  }

  on() {
    this.handleEvent()
    window.addEventListener('scroll', this)
    window.addEventListener('resize', this)
  }

  off() {
    window.removeEventListener('scroll', this)
    window.removeEventListener('resize', this)
  }
}

const reverses: any = {}
export default defineNuxtPlugin((nuxtApp) => {
  // @ts-ignore
  // @ts-ignore
  nuxtApp.vueApp.directive('reverse-block', {
    mounted(el, binding, node) {
      if (binding.value) {
        const reverse = new Reverse()
        reverses[node.patchFlag] = reverse
        reverse.blocks = [
          ...document.querySelectorAll('[reverse-block]'),
        ] as HTMLElement[]
        reverse.el = el
        reverse.classActive = binding.value
        nuxtApp.hook('page:finish', () => {
          setTimeout(() => {
            reverse.blocks = [
              ...document.querySelectorAll('[reverse-block]'),
            ] as HTMLElement[]
            if (reverse.blocks.length) {
              reverse.handleEvent()
            } else {
              el.classList.remove(binding.value)
            }
          }, 100)
        })
        reverse.on()
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    unmounted(el, binding, node) {
      if (reverses[node.patchFlag]) {
        reverses[node.patchFlag].off()
      }
    },
  })
})
