import { isNull } from "./type-check";

function stringify(value: any): string {
  return isNull(value) ? "" : "" + value;
}

export default stringify;
