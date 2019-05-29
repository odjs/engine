import { Dictionary, OptionApplier2, OptionDB, ParamTarget } from "../types";

function createDBOptionApplier<T extends ParamTarget>(
  name: string,
  db: OptionDB<T, Dictionary<any>>,
): OptionApplier2<T> {

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
