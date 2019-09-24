import { applyParam, ParamTarget, PerformHandlerParam, performParamApplier } from "../../src";

describe("perform param applier", () => {

  test("should apply and stop if match", () => {

    const theTarget = {};
    const apply = jest.fn();
    const mockParamApplier = {
      name: "mock",
      apply,
    };
    const appliers = [performParamApplier, mockParamApplier];

    const param: PerformHandlerParam<ParamTarget> = (target) => {
      target.test = 10;
    };

    applyParam(theTarget, param, appliers);

    expect(theTarget).toEqual({ test: 10 });
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
