import createOptionParamApplier from "./appliers/param-create-opt";
import performParamApplier from "./appliers/param-perform";
import { OptionApplier, ParamApplier, ParamTarget, PerformHandlerParam } from "./types";

export function applyParam<T extends ParamTarget>(
  target: T,
  param: unknown,
  appliers: Array<ParamApplier<T, any>>,
): T {

  for (let i = 0, len = appliers.length; i < len; i++) {

    const applier = appliers[i];

    if (!applier) {
      continue;
    }

    if (!applier.test || applier.test.call(applier, param)) {
      applier.apply.call(applier, target, param);
      break;
    }

  }

  return target;

}

export function applyParamArgs<T extends ParamTarget>(
  target: T,
  appliers: Array<ParamApplier<T, PerformHandlerParam<T>>>,
  args: ArrayLike<any>,
  start?: number,
) {

  for (let i = start || 0, len = args.length; i < len; i++) {
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
  appliers: Array<ParamApplier<T, PerformHandlerParam<T>>>,
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

export function applyPerforOptionParamArgs<T extends ParamTarget>(
  target: T,
  appliers: Array<OptionApplier<T>>,
  args: ArrayLike<any>,
  start?: number,
): T {

  return applyParamArgs<T>(
    target,
    [
      performParamApplier,
      createOptionParamApplier<T>(appliers),
    ] as Array<ParamApplier<T, any>>,
    args,
    start,
  );

}

export function applyMultiPerforOptionParamArgs<T extends ParamTarget>(
  targets: T[],
  appliers: Array<OptionApplier<T>>,
  args: ArrayLike<any>,
  start?: number,
) {

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
