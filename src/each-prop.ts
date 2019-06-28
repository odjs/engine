import { Dictionary } from "./types";

export type EachPropCallback<V = any, TH = any> = (this: TH, value: V, key: string) => void;
export type EachPropCallbackParam<P, V = any, TH = any> = (this: TH, value: V, key: string, param: P) => void;

export function eachProp<V = any, TH = any>(
  this: TH,
  object: Dictionary<V>,
  callback: EachPropCallback<V, TH>,
): void;
export function eachProp<P, V = any, TH = any>(
  this: TH,
  object: Dictionary<V>,
  callback: EachPropCallbackParam<P, V, TH>,
  param: P,
): void;
export function eachProp<P, V = any, TH = any>(
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
