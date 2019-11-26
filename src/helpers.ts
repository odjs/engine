import { Listener, ParamTarget } from './types'

export function setPropHelper(value: any, name: string, target: ParamTarget) {
  target[name] = value
}

export function addEventHelper(listener: Listener<EventTarget, Event>, type: string, target: EventTarget) {
  target.addEventListener(
    type,
    listener,
    false,
  )
}

export function remEventHelper(listener: Listener<EventTarget, Event>, type: string, target: EventTarget) {
  target.removeEventListener(
    type,
    listener,
    false,
  )
}
