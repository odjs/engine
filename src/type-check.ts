import { AnyFunction } from './types';

type TypeString = 'undefined' | 'string' | 'number' | 'boolean' | 'bigint' | 'object' | 'symbol' | 'function';

export function isNull(param: unknown): param is null | undefined {
  return param == null;
}

export function getType(param: unknown): TypeString {
  return typeof param;
}

export function isType<T = never>(param: unknown, type: string): param is T {
  return getType(param) === type;
}

export function isString(param: unknown): param is string {
  return isType<string>(param, 'string');
}

export function isNumber(param: unknown): param is number {
  return isType<number>(param, 'number');
}

export function isObject<V = unknown>(param: unknown): param is Record<keyof any, V> {
  return !isNull(param) && isType<unknown>(param, 'object');
}

export function isCallable<T extends AnyFunction>(param: unknown): param is T {
  return isType<T>(param, 'function');
}
