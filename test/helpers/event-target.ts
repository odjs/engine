export interface MockEventTarget extends EventTarget {
  listeners: Record<string, EventListenerOrEventListenerObject>;
}

export function createMockEventTarget(): MockEventTarget {

  return {

    listeners: {},

    addEventListener(type: string, listener: any) {
      this.listeners[type] = listener
    },

    removeEventListener(type: string, listener: any) {
      if (this.listeners[type] === listener) {
        delete this.listeners[type]
      }
    },

    dispatchEvent() {
      return true
    },

  }

}
