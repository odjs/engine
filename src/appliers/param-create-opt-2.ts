import { applyOptionObject } from "../apply-options";
import { isObject } from "../type-check";
import { OptionApplier, ParamApplier2, ParamTarget } from "../types";

function createOptionParamApplier<T extends ParamTarget>(
  name: string,
  appliers: Array<OptionApplier<T, any>>,
): ParamApplier2<T, ParamTarget> {
  return {

    name,

    test: (param) => isObject(param),

    apply(target, param) {
      applyOptionObject<T>(
        target,
        param,
        appliers,
      );
    },

  };
}

export default createOptionParamApplier;
