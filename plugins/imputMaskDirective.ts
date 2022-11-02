export type TokenType = {
  [key: string]: {
    pattern?: RegExp
    repeat?: boolean
  }
}
export type MaskType = string | { mask: string; tokens: TokenType }

interface MaskedElement extends HTMLInputElement {
  mask?: MaskType
}

const TOKENS = {
  '#': { pattern: /[0-9]/ },
  x: { pattern: /[0-9a-zA-Z]/ },
  X: { pattern: /[0-9а-яА-Яa-zA-Z]/ },
  S: { pattern: /[a-zA-Z]/ },
  E: { pattern: /[0-9a-zA-Z-_@.]/ },
  '*': { repeat: true },
}

function createEvent(name: string) {
  const event = document.createEvent('Event')
  event.initEvent(name, true, true)
  return event
}

function getInputElement(el: HTMLElement) {
  return el instanceof HTMLInputElement ? el : el.querySelector('input')
}

function masking(value: string, mask: string, tokens: TokenType): string {
  let iValue = 0
  let iMask = 0
  let output = ''

  while (iValue < value.length && iMask < mask.length) {
    const token = mask[iMask]
    const maskRegex = tokens[token]
    const currentValue = value[iValue]

    if (maskRegex && maskRegex.pattern) {
      if (maskRegex.pattern.test(currentValue)) {
        output += currentValue
        iMask++
      }

      iValue++
    } else if (maskRegex && maskRegex.repeat) {
      const prevToken = mask[iMask - 1]
      const prevMaskRegex = tokens[prevToken]

      if (prevMaskRegex && prevMaskRegex.pattern) {
        if (!prevMaskRegex.pattern.test(currentValue)) {
          iMask++
        } else {
          iMask--
        }
      }
    } else {
      output += token
      if (currentValue === token) iValue++

      iMask++
    }
  }

  return output
}

function handleValueChange(e: Event) {
  const target = e.target as MaskedElement
  const { mask } = target
  const oldValue = target.value
  if (mask) {
    if (typeof mask === 'string') {
      target.value = masking(oldValue, mask, TOKENS)
    } else {
      target.value = masking(oldValue, mask.mask, mask.tokens)
    }

    if (target.value !== oldValue) {
      target.dispatchEvent(createEvent('input'))
    }
  }
}

function toggleMask(el: HTMLElement, binding: any) {
  const input = getInputElement(el) as MaskedElement

  if (input && binding.value) {
    input.mask = binding.value
    input.addEventListener('input', handleValueChange)

    if (input.value) {
      input.dispatchEvent(createEvent('input'))
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('mask', {
    mounted(el, binding) {
      if (binding.value) {
        toggleMask(el, binding)
      }
    },
    unmounted(el, binding) {
      if (binding.value) {
        const input = getInputElement(el)
        if (input) {
          input.removeEventListener('input', handleValueChange)
        }
      }
    },
    updated(el, binding) {
      if (binding.value && binding.value !== binding.oldValue) {
        toggleMask(el, binding)
      }
    },
  })
})
