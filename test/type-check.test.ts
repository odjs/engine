import { isCallable, isNull, isNumber, isObject, isString } from "../src";

function runTest(validValues: any[], invalidValues: any[], method: (value: any) => boolean) {

  const values = [...validValues, ...invalidValues];
  const expected = [...validValues.map(() => true), ...invalidValues.map(() => false)];

  const result = values.map((value) => method(value));

  expect(result).toEqual(expected);

}

// tslint:disable-next-line: no-construct
const objects = [{}, new Object(), new String(), new Number(), new Boolean()];
const arrays = [[], new Array()];
const objectsAndArrays = [...objects, ...arrays];
const strings = ["", "string"];
const booleans = [true, false, !0, !1];
const numbers = [0, 1, 1 / 0, Number({}), NaN];
const nulls = [null, undefined, void 0];
const functions = [describe, () => null, function func() { /**/ }];

describe("type check", () => {

  test("should check null type", () => {

    runTest(nulls, [
      ...strings,
      ...booleans,
      ...numbers,
      ...objectsAndArrays,
      ...functions,
    ], isNull);

  });

  test("should check string type", () => {

    runTest(strings, [
      ...booleans,
      ...numbers,
      ...objectsAndArrays,
      ...nulls,
      ...functions,
    ], isString);

  });

  test("should check number type", () => {

    runTest(numbers, [
      ...strings,
      ...booleans,
      ...objectsAndArrays,
      ...nulls,
      ...functions,
    ], isNumber);

  });

  test("should check object type", () => {

    runTest(objectsAndArrays, [
      ...strings,
      ...booleans,
      ...numbers,
      ...nulls,
      ...functions,
    ], isObject);

  });

  test("should check function type", () => {

    runTest(functions, [
      ...strings,
      ...booleans,
      ...numbers,
      ...objectsAndArrays,
      ...nulls,
    ], isCallable);

  });

});
