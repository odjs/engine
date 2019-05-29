// @ts-check

const { applyParam, applyParamArgs, applyMultiParamArgs, performParamApplier } = require("..");

describe("apply params", () => {

  const createMockParamApplier = () => ({
    name: "mock",
    apply: jest.fn(),
  });

  test("should apply single param and stop", () => {

    const target = {};

    const param = (target) => {
      target.test = 10;
    };

    const mockParamApplier = createMockParamApplier();
    const appliers = [performParamApplier, mockParamApplier];

    applyParam(target, param, appliers);

    expect(target).toEqual({ test: 10 });
    expect(mockParamApplier.apply).not.toHaveBeenCalled();

  });

  test("should call next applier if not match", () => {

    const target = {};

    const param = {};

    const mockParamApplier = createMockParamApplier();
    const appliers = [performParamApplier, mockParamApplier];

    applyParam(target, param, appliers);

    expect(target).toEqual({});
    expect(mockParamApplier.apply).toHaveBeenCalledTimes(1);

  });

  test("apply multiple params", () => {

    const target = {};
    const appliers = [performParamApplier];
    const args = [(target) => {
      target.test = 10;
    }];

    applyParamArgs(target, appliers, args, 0);

    expect(target).toEqual({ test: 10 });

  });

  test("apply multiple params to multiple target", () => {

    const targets = [{}, {}];
    const appliers = [performParamApplier];
    const args = [(target) => {
      target.test = 10;
    }];

    applyMultiParamArgs(targets, appliers, args, 0);

    targets.forEach((target) => {
      expect(target).toEqual({ test: 10 });
    });

  });

});


