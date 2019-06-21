// @ts-check

const {
  applyParam,
  applyParamArgs,
  applyMultiParamArgs,
  applyPerforOptionParamArgs,
  applyMultiPerforOptionParamArgs,
  performParamApplier,
  propOptionApplier,
} = require("..");

describe("apply params", () => {

  const createMockParamApplier = () => ({
    apply: jest.fn((target, param) => {
      target.mock = param;
    }),
  });

  test("should apply single param and stop if match", () => {

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

    expect(target).toEqual({ mock: param });
    expect(mockParamApplier.apply).toHaveBeenCalledTimes(1);

  });

  test("should apply multiple params on single target", () => {

    const target = {};
    const appliers = [performParamApplier];
    const params = [
      (target) => {
        target.key1 = 10;
      },
      (target) => {
        target.key2 = 20;
      },
    ];

    applyParamArgs(target, appliers, params, 0);

    expect(target).toEqual({ key1: 10, key2: 20 });

  });

  test("should apply multiple params on multiple targets", () => {

    const targets = [{}, {}];
    const appliers = [performParamApplier];
    const params = [
      (target) => {
        target.key1 = 10;
      },
      (target) => {
        target.key2 = 20;
      },
    ];

    applyMultiParamArgs(targets, appliers, params, 0);

    targets.forEach((target) => {
      expect(target).toEqual({ key1: 10, key2: 20 });
    });

  });

  test("should apply perform/option params on single target", () => {

    const target = {};
    const appliers = [propOptionApplier];
    const params = [
      (target) => {
        target.key1 = 10;
      },
      { key2: 20 },
    ];

    applyPerforOptionParamArgs(target, appliers, params, 0);

    expect(target).toEqual({ key1: 10, key2: 20 });

  });

  test("should apply perform/option params on multiple targets", () => {

    const targets = [{}, {}];
    const appliers = [propOptionApplier];
    const params = [
      (target) => {
        target.key1 = 10;
      },
      { key2: 20 },
    ];

    applyMultiPerforOptionParamArgs(targets, appliers, params, 0);

    targets.forEach((target) => {
      expect(target).toEqual({ key1: 10, key2: 20 });
    });

  });

});


