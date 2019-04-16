import { Dictionary, OptionApplier, OptionDB, ParamTarget } from "../types";

function createDBOptionApplier<T extends ParamTarget>(db: OptionDB<T, Dictionary<any>>): OptionApplier<T, any> {
  return (target, name, value, next) => {
    if (name in db) {
      db[name](
        target,
        value,
      );
    } else {
      next();
    }
  };
}

export default createDBOptionApplier;
