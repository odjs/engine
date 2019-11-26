import { OptionApplier } from '../types'

const eventOnOptionApplier: OptionApplier<EventTarget> = {

  test: (optionName) => /^on\w+$/.test(optionName),

  apply(target, optionName, value) {
    target.addEventListener(
      optionName.substr(2),
      value as EventListener,
      false,
    )
  },

}

export default eventOnOptionApplier
