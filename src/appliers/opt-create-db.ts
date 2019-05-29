import { Dictionary, OptionApplier, OptionDB, ParamTarget } from "../types";

function createDBOptionApplier<T extends ParamTarget>(
  name: string,
  db: OptionDB<T, Dictionary<any>>,
): OptionApplier<T> {

  return {

    name,

    test: (optionName) => (optionName in db),

    apply(target, optionName, value) {
      db[optionName](
        target,
        value,
      );
    },

  };

}

export default createDBOptionApplier;
