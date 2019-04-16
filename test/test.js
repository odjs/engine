const { applyParam, applyParamArgs, performParamApplier } = require("..");

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

  const result = applyParamArgs(target, [
    performParamApplier,
  ], [performHandler, performHandler], 0);

  expect(performHandler).toHaveBeenCalledTimes(2);
  expect(performHandler).toHaveBeenCalledWith(target);
  expect(result).toBe(target);

});

