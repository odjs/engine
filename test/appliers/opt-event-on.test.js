// @ts-check

const { eventOnOptionApplier, applyOptionObject } = require("../..");

describe("on-event option applier", () => {

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
  });

  test("should apply and stop if it's an on-event option", () => {

    const target = createMockEventTarget();
    const mockOptionApplier = jest.fn();
    /** @type { any[] } */
    const appliers = [eventOnOptionApplier, mockOptionApplier];

    const listener = () => { };

    const options = {
      ontest: listener,
    };

    applyOptionObject(target, options, appliers);

    expect(target.listeners.test).toBe(listener);
    expect(mockOptionApplier).not.toHaveBeenCalled();

  });

  test("should call next applier if it's not a on-event option", () => {

    const target = createMockEventTarget();
    const mockOptionApplier = jest.fn();
    /** @type { any[] } */
    const appliers = [eventOnOptionApplier, mockOptionApplier];

    const listener = () => { };

    const options = {
      test1: listener,
      test2: listener,
    };

    applyOptionObject(target, options, appliers);

    expect(mockOptionApplier).toHaveBeenCalledTimes(2);

  });

});

