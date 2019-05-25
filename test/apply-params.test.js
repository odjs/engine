// @ts-check

const { applyParam, applyParamArgs, applyMultiParamArgs, performParamApplier } = require("..");

describe("apply params", () => {

  test("apply single param", () => {

    const target = {};
    const appliers = [performParamApplier];

    applyParam(target, (target) => {
      target.test = 10;
    }, appliers);

    expect(target).toEqual({ test: 10 });

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


