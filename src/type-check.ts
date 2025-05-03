import { AnyFunction } from './types';

type TypeString = 'undefined' | 'string' | 'number' | 'boolean' | 'bigint' | 'object' | 'symbol' | 'function';

export function isNull(param: unknown): param is null | undefined {
  return param == null;
}

export function getType(param: unknown): TypeString {
  return typeof param;
}

export function isType(param: unknown, type: 'string'): param is string;
export function isType(param: unknown, type: 'number'): param is number;
export function isType(param: unknown, type: 'object'): param is object;
export function isType(param: unknown, type: 'function'): param is AnyFunction;
export function isType(param: unknown, type: string): boolean {
  return getType(param) === type;
}

export function isString(param: unknown): param is string {
  return isType(param, 'string');
}

export function isNumber(param: unknown): param is number {
  return isType(param, 'number');
}

export function isObject<V = unknown>(param: unknown): param is Record<keyof any, V> {
  return !isNull(param) && isType(param, 'object');
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export function isCallable<F extends AnyFunction>(param: unknown): param is F;
export function isCallable(param: unknown): param is AnyFunction {
  return isType(param, 'function');
}
