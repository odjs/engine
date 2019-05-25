// @ts-check

const { applyOption, applyOptionObject, propOptionApplier } = require("..");

describe("apply options", () => {

  test("apply single option", () => {

    const target = {};
    const appliers = [propOptionApplier];

    applyOption(10, "test", [target, appliers]);

    expect(target).toEqual({ test: 10 });

  });

  test("apply multiple option", () => {

    const target = {};
    const appliers = [propOptionApplier];
    const options = { key1: true, key2: "", key3: 10 };

    applyOptionObject(target, options, appliers);

    expect(target).toEqual(options);

  });

});


