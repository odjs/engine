import { AnyFunction } from './types'

type TypeString = 'undefined' | 'string' | 'number' | 'boolean' | 'bigint' | 'object' | 'symbol' | 'function';

export function isNull(param: any): param is null | undefined {
  return param == null
}

export function getType(param: any): TypeString {
  return typeof param
}

export function isType<T = never>(param: any, type: string): param is T {
  return getType(param) === type
}

export function isString(param: any): param is string {
  return isType<string>(param, 'string')
}

export function isNumber(param: any): param is number {
  return isType<number>(param, 'number')
}

export function isObject<V = any>(param: any): param is Record<keyof any, V> {
  return !isNull(param) && isType<object>(param, 'object')
}

export function isCallable<T extends AnyFunction>(param: any): param is T {
  return isType<T>(param, 'function')
}
