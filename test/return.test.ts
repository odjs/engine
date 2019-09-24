import { applyMultiParamArgs, applyOption, applyOptionObject, applyParam, applyParamArgs } from "../src";

describe("return type", () => {

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

  test("should return target from applyOption", () => {

    const target = {};
    const result = applyOption(100, "test", [target, []]);

    expect(result).toBe(target);

  });

  test("should return target from applyOptionObject", () => {

    const target = {};
    const result = applyOptionObject(target, {}, []);

    expect(result).toBe(target);

  });

});
