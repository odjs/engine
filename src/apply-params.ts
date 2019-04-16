import { NextApplierCaller, OptionApplier, ParamApplier, ParamTarget } from "./types";

import createOptionParamApplier from "./appliers/param-create-opt";
import performParamApplier from "./appliers/param-perf";

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
  args: IArguments,
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

export function applyPerforOptionParamArgs<T extends ParamTarget>(
  target: T,
  appliers: Array<OptionApplier<T, any>>,
  args: IArguments,
  start?: number,
): T {
  start = start || 0;
  const paramAppliers = [performParamApplier, createOptionParamApplier<T>(appliers)];
  for (let i = start; i < args.length; i++) {
    applyParam<T>(
      target,
      args[i],
      paramAppliers,
    );
  }
  return target;
}

export function applyMultiPerforOptionParamArgs<T extends ParamTarget>(
  targets: T[],
  appliers: Array<OptionApplier<T, any>>,
  args: IArguments,
  start?: number,
): T[] {
  for (let i = 0, len = targets.length; i < len; i++) {
    applyPerforOptionParamArgs(
      targets[i],
      appliers,
      args,
      start,
    );
  }
  return targets;
}
