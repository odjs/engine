import { ParamTarget } from "../types";

function propOptionApplier(target: ParamTarget, name: string, value: any): void {
  target[name] = value;
}

export default propOptionApplier;
