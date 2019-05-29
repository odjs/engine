// @ts-check

const { performParamApplier, applyParam } = require("../..");

describe("perform param applier", () => {

  test("should apply param", () => {

    const target = {};
    const appliers = [performParamApplier];

    const param = (target) => {
      target.test = 10;
    };

    applyParam(target, param, appliers);

    expect(target).toEqual({ test: 10 });

  });

  test("should apply and stop if match", () => {

    const target = {};
    const mockParamApplier = jest.fn();
    const appliers = [performParamApplier, mockParamApplier];

    const param = () => { };

    applyParam(target, param, appliers);

    expect(mockParamApplier).not.toHaveBeenCalledTimes(1);

  });

  test("should call next applier if not match", () => {

    const target = {};
    const mockParamApplier = jest.fn();
    const appliers = [performParamApplier, mockParamApplier];

    const param = {};

    applyParam(target, param, appliers);

    expect(mockParamApplier).toHaveBeenCalledTimes(1);

  });

});
