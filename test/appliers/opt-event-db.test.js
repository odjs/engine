// @ts-check

const { eventDBOptionApplier, applyOptionObject } = require("../..");

describe("event db option applier", () => {

  const createMockEventTarget = () => ({
    listeners: {},
    addEventListener(type, listener) {
      this.listeners[type] = listener;
    },
    removeEventListener(type, listener) {
      if (this.listeners[type] === listener) {
        delete this.listeners[type];
      }
    },
    dispatchEvent() {
      return true;
    },
  });

  test("should apply event options", () => {

    const target = createMockEventTarget();
    const appliers = [eventDBOptionApplier];

    const listener = () => { };
    const optionObject = {
      events: {
        load: listener,
      },
    };

    applyOptionObject(target, optionObject, appliers);

    expect(target.listeners.load).toBe(listener);

  });

});

