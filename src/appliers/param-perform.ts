import { isCallable } from '../type-check';
import { ParamApplier, ParamTarget, PerformHandlerParam } from '../types';

const performParamApplier: ParamApplier<ParamTarget, PerformHandlerParam<ParamTarget>> = {

  test: (param) => isCallable<PerformHandlerParam<ParamTarget>>(param),

  apply(target, param) {
    param.call(
      target,
      target,
    );
  },

};

export default performParamApplier;
