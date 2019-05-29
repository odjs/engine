// @ts-check

const { objectDBOptionApplier, applyOptionObject } = require("../..");

describe("object db option applier", () => {

  test("should apply property options", () => {

    const target = {};
    const appliers = [objectDBOptionApplier];

    const prop = { test: 10 };

    const optionObject = {
      prop,
    };

    applyOptionObject(target, optionObject, appliers);

    expect(target).toEqual(prop);

  });

  test("should apply perform options", () => {

    const target = {};
    const appliers = [objectDBOptionApplier];

    const handler = jest.fn();

    const optionObject = {
      perform: handler,
    };

    applyOptionObject(target, optionObject, appliers);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(target);

  });

});

