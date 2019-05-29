import { isCallable } from "./type-check";
import { NextApplierCaller, ParamApplier, ParamApplier2, ParamTarget, PerformHandlerParam } from "./types";

export function applyParam<T extends ParamTarget>(
  target: T,
  param: unknown,
  appliers: Array<ParamApplier<T> | ParamApplier2<T, PerformHandlerParam<T>>>,
): T {
  let index = 0;
  const next: NextApplierCaller = () => {
    const applier = appliers[index++];
    if (applier) {
      if (isCallable(applier)) {
        // supprt legacy applier
        applier(
          target,
          param,
          next,
        );
      } else {
        // use modern applier
        if (!applier.test || applier.test(param)) {
          applier.apply(target, param as any);
        } else {
          next();
        }
      }
    }
  };
  next();
  return target;
}

export function applyParamArgs<T extends ParamTarget>(
  target: T,
  appliers: Array<ParamApplier<T>>,
  args: ArrayLike<any>,
  start?: number,
) {
  start = start || 0;
  for (let i = start, len = args.length; i < len; i++) {
    applyParam(
      target,
      args[i],
      appliers,
    );
  }
  return target;
}

export function applyMultiParamArgs<T extends ParamTarget>(
  targets: T[],
  appliers: Array<ParamApplier<T>>,
  args: ArrayLike<any>,
  start?: number,
): T[] {
  for (let i = 0, len = targets.length; i < len; i++) {
    applyParamArgs(
      targets[i],
      appliers,
      args,
      start,
    );
  }
  return targets;
}
