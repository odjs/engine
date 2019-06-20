import { OptionApplier, ParamTarget } from "../types";

const propOptionApplier: OptionApplier<ParamTarget> = {

  apply(target, optionName, value) {
    target[optionName] = value;
  },

};

export default propOptionApplier;
