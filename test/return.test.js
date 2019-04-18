// @ts-check
const { applyParam, applyParamArgs, applyMultiParamArgs } = require("..");

describe("perform param applier", () => {

  test("should return target from applyParam", () => {

    const target = {};
    const param = {};
    const result = applyParam(target, param, []);

    expect(result).toBe(target);

  });

  test("should return target from applyParamArgs", () => {

    const target = {};
    const result = applyParamArgs(target, [], [], 0);

    expect(result).toBe(target);

  });

  test("should return multiple targets from applyMultiParamArgs", () => {

    const targets = [{}, {}];
    const result = applyMultiParamArgs(targets, [], [], 0);

    expect(result).toBe(targets);

  });

});
