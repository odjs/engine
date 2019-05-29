import { isCallable } from "../type-check";
import { ParamApplier2, ParamTarget, PerformHandlerParam } from "../types";

const performParamApplier: ParamApplier2<ParamTarget, PerformHandlerParam<ParamTarget>> = {

  name: "perform",

  test: (param) => isCallable<PerformHandlerParam<ParamTarget>>(param),

  apply(target, param) {
    param.call(
      target,
      target,
    );
  },

};

export default performParamApplier;
