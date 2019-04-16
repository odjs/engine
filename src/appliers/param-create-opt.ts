import { applyOptionObject } from "../apply-options";
import { isObject } from "../type-check";
import { NextApplierCaller, OptionApplier, ParamApplier, ParamTarget } from "../types";

function createOptionParamApplier<T extends ParamTarget>(appliers: Array<OptionApplier<T, any>>): ParamApplier<T> {
  return (target: T, param: unknown, next: NextApplierCaller): void => {
    if (isObject(param)) {
      applyOptionObject<T>(
        target,
        param,
        appliers,
      );
    } else {
      next();
    }
  };
}

export default createOptionParamApplier;
