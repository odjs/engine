import { OptionApplier, ParamTarget } from "../types";

const propOptionApplier: OptionApplier<ParamTarget> = {

  name: "prop",

  apply(target, optionName, value) {
    target[optionName] = value;
  },

};

export default propOptionApplier;
