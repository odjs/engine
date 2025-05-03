export interface MockEventTarget extends EventTarget {
  listeners: Record<string, EventListenerOrEventListenerObject>;
}

export function createMockEventTarget(): MockEventTarget {

  return {

    listeners: {},

    addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
      this.listeners[type] = listener;
    },

    removeEventListener(type: string, listener: EventListenerOrEventListenerObject) {
      if (this.listeners[type] === listener) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.listeners[type];
      }
    },

    dispatchEvent() {
      return true;
    },

  };

}
