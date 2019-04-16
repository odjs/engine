import eachProp from "./each-prop";
import { Dictionary, NextApplierCaller, OptionApplier, ParamTarget } from "./types";

export function applyOption<T extends ParamTarget>(
  value: unknown,
  name: string,
  [target, appliers]: [T, Array<OptionApplier<T, any>>],
): T {
  let index = 0;
  const next: NextApplierCaller = () => {
    const applier = appliers[index++];
    if (applier) {
      applier(
        target,
        name,
        value,
        next,
      );
    }
  };
  next();
  return target;
}

export function applyOptionObject<T extends ParamTarget>(
  target: T,
  options: Dictionary<unknown>,
  appliers: Array<OptionApplier<T, any>>,
): T {
  eachProp<[T, Array<OptionApplier<T, any>>]>(
    options,
    applyOption,
    [target, appliers],
  );
  return target;
}
