// @ts-check

const { applyParam, createOptionParamApplier } = require("../..");

describe("option param applier", () => {

  const nameToValueOptionApplier = {
    name: "name-to-value",
    apply(target, name) {
      target[name] = name;
    },
  };

  const paramAppliers = [createOptionParamApplier("", [
    nameToValueOptionApplier,
  ])];

  test("should create param applier", () => {

    const target = {};

    applyParam(target, { prop: true }, paramAppliers);

    expect(target).toEqual({ prop: "prop" });

  });

});
