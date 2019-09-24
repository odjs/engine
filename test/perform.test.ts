import { applyMultiParamArgs, applyParam, applyParamArgs, performParamApplier } from "../src";

describe("perform param applier", () => {

  const paramAppliers = [performParamApplier];

  test("should apply perform param", () => {

    const target = {};
    const performHandler = jest.fn();

    applyParam(target, performHandler, paramAppliers);

    expect(performHandler).toHaveBeenCalledTimes(1);
    expect(performHandler).toHaveBeenCalledWith(target);

  });

  test("should apply multiple perform params", () => {

    const target = {};
    const performHandler = jest.fn();

    applyParamArgs(target, paramAppliers, [performHandler, performHandler], 0);

    expect(performHandler).toHaveBeenCalledTimes(2);
    expect(performHandler).toHaveBeenCalledWith(target);

  });

  test("should apply multiple perform params", () => {

    const targets = [{}, {}, {}];
    const args = [jest.fn(), jest.fn()];

    applyMultiParamArgs(targets, paramAppliers, args, 0);

    for (const arg of args) {
      expect(arg).toHaveBeenCalledTimes(targets.length);
      for (const target of targets) {
        expect(arg).toHaveBeenCalledWith(target);
      }
    }

  });

});
