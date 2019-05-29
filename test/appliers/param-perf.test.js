// @ts-check

const { performParamApplier, applyParam } = require("../..");

describe("perform param applier", () => {

  test("should apply and stop if match", () => {

    const target = {};
    const apply = jest.fn();
    const mockParamApplier = {
      name: "mock",
      apply,
    };
    const appliers = [performParamApplier, mockParamApplier];

    const param = (target) => {
      target.test = 10;
    };

    applyParam(target, param, appliers);

    expect(target).toEqual({ test: 10 });
    expect(apply).not.toHaveBeenCalled();

  });

  test("should call next applier if not match", () => {

    const target = {};

    const apply = jest.fn();
    const mockParamApplier = {
      name: "mock",
      apply,
    };
    const appliers = [performParamApplier, mockParamApplier];
    const param = {};

    applyParam(target, param, appliers);

    expect(apply).toHaveBeenCalledTimes(1);

  });

});
