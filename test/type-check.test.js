// @ts-check

const { isNull, isString, isNumber, isObject } = require("..");

function runTest(validValues, invalidValues, method) {

  const values = [...validValues, ...invalidValues];
  const expected = [...validValues.map(() => true), ...invalidValues.map(() => false)];

  const result = values.map((value) => method(value));

  expect(result).toEqual(expected);

}

const objects = [{}, new Object(), new String(), new Number(), new Boolean()];
const arrays = [[], new Array()];
const objectsAndArrays = [...objects, ...arrays];
const strings = ["", "string"];
const booleans = [true, false, !0, !1];
const numbers = [0, 1, 1 / 0, Number({}), NaN];
const nulls = [null, undefined, void 0];

describe("type check", () => {

  test("should check null type", () => {

    runTest(nulls, [
      ...strings,
      ...booleans,
      ...numbers,
      ...objectsAndArrays,
    ], isNull);

  });

  test("should check string type", () => {

    runTest(strings, [
      ...booleans,
      ...numbers,
      ...objectsAndArrays,
      ...nulls,
    ], isString);

  });

  test("should check number type", () => {

    runTest(numbers, [
      ...strings,
      ...booleans,
      ...objectsAndArrays,
      ...nulls,
    ], isNumber);

  });

  test("should check object type", () => {

    runTest(objectsAndArrays, [
      ...strings,
      ...booleans,
      ...numbers,
      ...nulls,
    ], isObject);

  });

});
