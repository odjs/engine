import { Dictionary } from "./types";

function eachProp<V = any, TH = any>(
  this: TH,
  object: Dictionary<V>,
  callback: (this: TH, value: V, key: string) => any,
): void;
function eachProp<P, V = any, TH = any>(
  this: TH,
  object: Dictionary<V>,
  callback: (this: TH, value: V, key: string, param: P) => any,
  param: P,
): void;
function eachProp<P, V = any, TH = any>(
  this: TH,
  object: Dictionary<V>,
  callback: (this: TH, value: V, key: string, param?: P) => any,
  param?: P,
): void {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      callback.call(this, object[key], key, param);
    }
  }
}

export default eachProp;
