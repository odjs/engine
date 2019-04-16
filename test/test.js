// @ts-check
const { applyParam, applyParamArgs, applyMultiParamArgs, performParamApplier } = require("./..");

describe("perform param applier", () => {

  test("should apply perform param and return target", () => {

    const target = {};
    const performHandler = jest.fn();

    const result = applyParam(target, performHandler, [
      performParamApplier,
    ]);

    expect(performHandler).toHaveBeenCalledTimes(1);
    expect(performHandler).toHaveBeenCalledWith(target);

    expect(result).toBe(target);

  });

  test("should apply multiple perform params and return target", () => {

    const target = {};
    const performHandler = jest.fn();
    const args = [performHandler, performHandler];

    const result = applyParamArgs(target, [
      performParamApplier,
    ], args, 0);

    expect(performHandler).toHaveBeenCalledTimes(2);
    expect(performHandler).toHaveBeenCalledWith(target);

    expect(result).toBe(target);

  });

  test("should apply multiple perform params and return multiple targets", () => {

    const targets = [{}, {}];
    const performHandler = jest.fn();
    const args = [performHandler, performHandler];

    const result = applyMultiParamArgs(targets, [
      performParamApplier,
    ], args, 0);

    expect(performHandler).toHaveBeenCalledTimes(4);
    expect(performHandler).toHaveBeenCalledWith(targets[0]);
    expect(performHandler).toHaveBeenCalledWith(targets[1]);

    expect(result).toBe(targets);

  });

});
