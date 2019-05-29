import eachProp from "./each-prop";
import { isCallable } from "./type-check";
import { Dictionary, NextApplierCaller, OptionApplier2, ParamTarget } from "./types";

export function applyOption<T extends ParamTarget>(
  value: unknown,
  name: string,
  [target, appliers]: [T, Array<OptionApplier2<T>>],
): T {

  let index = 0;

  const next: NextApplierCaller = () => {

    const applier = appliers[index++];

    if (applier) {

      if (isCallable(applier)) {
        throw new Error("legacy function appliers!");
      }

      if (!applier.test || applier.test.call(applier, name)) {
        applier.apply(target, name, value);
      } else {
        next();
      }

    }
  };

  next();

  return target;

}

export function applyOptionObject<T extends ParamTarget>(
  target: T,
  options: Dictionary<unknown>,
  appliers: Array<OptionApplier2<T>>,
): T {
  eachProp<[T, Array<OptionApplier2<T>>]>(
    options,
    applyOption,
    [target, appliers],
  );
  return target;
}
