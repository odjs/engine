import eachProp from "./each-prop";
import { Dictionary, OptionApplier, ParamTarget } from "./types";

export function applyOption<T extends ParamTarget>(
  value: unknown,
  name: string,
  [target, appliers]: [T, Array<OptionApplier<T>>],
): T {

  for (let i = 0, len = appliers.length; i < len; i++) {

    const applier = appliers[i];

    if (!applier) {
      continue;
    }

    if (!applier.test || applier.test(name, target)) {
      applier.apply(target, name, value);
      break;
    }

  }

  return target;

}

export function applyOptionObject<T extends ParamTarget>(
  target: T,
  options: Dictionary<unknown>,
  appliers: Array<OptionApplier<T>>,
): T {

  eachProp<[T, Array<OptionApplier<T>>]>(
    options,
    applyOption,
    [target, appliers],
  );

  return target;

}
