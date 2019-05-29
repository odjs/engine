import { OptionApplier2, ParamTarget } from "../types";

const propOptionApplier: OptionApplier2<ParamTarget> = {

  name: "prop",

  apply(target, optionName, value) {
    target[optionName] = value;
  },

};

export default propOptionApplier;
