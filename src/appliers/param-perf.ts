import { isCallable } from "../type-check";
import { NextApplierCaller, ParamTarget, PerformHandlerParam } from "../types";

function performParamApplier<T extends ParamTarget>(target: T, param: unknown, next: NextApplierCaller): void {
  if (isCallable<PerformHandlerParam<T>>(param)) {
    param.call(
      target,
      target,
    );
  } else {
    next();
  }
}

export default performParamApplier;
