// @ts-check

const { applyOption, applyOptionObject, propOptionApplier } = require("..");

describe("apply options", () => {

  const createMockTestOptionApplier = (opName) => ({
    name: "mock",
    test: (optionName) => (optionName === opName),
    apply: jest.fn((target, name, value) => {
      target.test = value;
    }),
  });

  test("should apply single option and stop", () => {

    const target = {};

    const mockOptionApplier1 = createMockTestOptionApplier("test");
    const mockOptionApplier2 = createMockTestOptionApplier("cancel");
    const appliers = [mockOptionApplier1, mockOptionApplier2];

    applyOption(10, "test", [target, appliers]);

    expect(target).toEqual({ test: 10 });
    expect(mockOptionApplier1.apply).toHaveBeenCalledTimes(1);
    expect(mockOptionApplier2.apply).not.toHaveBeenCalled();

  });

  test("should call next option applier if no match", () => {

    const target = {};

    const mockOptionApplier1 = createMockTestOptionApplier("test");
    const mockOptionApplier2 = createMockTestOptionApplier("cancel");
    const appliers = [mockOptionApplier1, mockOptionApplier2];

    applyOption(10, "cancel", [target, appliers]);

    expect(target).toEqual({ test: 10 });
    expect(mockOptionApplier1.apply).not.toHaveBeenCalled();
    expect(mockOptionApplier2.apply).toHaveBeenCalledTimes(1);

  });

  test("should apply multiple option", () => {

    const target = {};
    const appliers = [propOptionApplier];
    const options = { key1: true, key2: "", key3: 10 };

    applyOptionObject(target, options, appliers);

    expect(target).toEqual(options);

  });

});


