import eachProp from "../each-prop";
import { setPropertyHelper } from "../helpers";
import { Dictionary, OptionDB, ParamTarget, PerformHandlerParam } from "../types";

type Target = ParamTarget;

interface IObjectOptionMap<T extends Target> {
  prop: Dictionary<any>;
  perform: PerformHandlerParam<T>;
}

// type ObjectOptionDBMap<T extends Target> = IObjectOptionMap<T>;

const objectOptionDB: OptionDB<Target, IObjectOptionMap<Target>> = {

  prop(target, props) {
    eachProp(
      props,
      setPropertyHelper,
      target,
    );
  },

  perform(target, handler) {
    handler.call(
      target,
      target,
    );
  },

};

export default objectOptionDB;
