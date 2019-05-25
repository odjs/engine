// @ts-check

const { applyParam, applyParamArgs, applyMultiParamArgs, createOptionParamApplier } = require("..");

describe("option param applier", () => {

  /**
   * custom option applier
   * @param {object} target
   * @param {string} name
   */
  const optionApplier = (target, name) => {
    target[name] = name;
  };

  const paramAppliers = [createOptionParamApplier([
    optionApplier,
  ])];

  test("should apply option param", () => {

    const target = {};

    applyParam(target, { prop: true }, paramAppliers);

    expect(target).toHaveProperty("prop");

  });

  test("should apply multiple option param", () => {

    const target = {};

    applyParamArgs(target, paramAppliers, [{ prop1: true }, { prop2: true }], 0);

    expect(target).toHaveProperty("prop1");
    expect(target).toHaveProperty("prop2");

  });

  test("should apply multiple option param on multiple targets", () => {

    const targets = [{}, {}];

    applyMultiParamArgs(targets, paramAppliers, [{ prop1: true }, { prop2: true }], 0);

    for (const target of targets) {
      expect(target).toHaveProperty("prop1");
      expect(target).toHaveProperty("prop2");
    }

  });

});
