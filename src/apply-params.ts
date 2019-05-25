import { NextApplierCaller, ParamApplier, ParamTarget } from "./types";

export function applyParam<T extends ParamTarget>(
  target: T,
  param: unknown,
  appliers: Array<ParamApplier<T>>,
): T {
  let index = 0;
  const next: NextApplierCaller = () => {
    const applier = appliers[index++];
    if (applier) {
      applier(
        target,
        param,
        next,
      );
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
