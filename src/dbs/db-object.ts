import eachProp from "../each-prop";
import { setPropHelper } from "../helpers";
import { Dictionary, OptionDB, ParamTarget, PerformHandlerParam } from "../types";

export interface ObjectOptionMap<T extends ParamTarget> {
  prop: Dictionary<any>;
  perform: PerformHandlerParam<T>;
}

export const objectOptionDB: OptionDB<ParamTarget, ObjectOptionMap<ParamTarget>> = {

  prop(target, props) {
    eachProp(
      props,
      setPropHelper,
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
