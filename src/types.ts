export type AnyFunction = (this: any, ...args: any[]) => any;

export type SingleOrMulti<T> = T | T[];

export type Dictionary<V> = Record<string, V>;

export type Falsy = false | 0 | "" | null | undefined;
export type NotFalsy = true | number | string | object;

// Applier Next

export type NextApplierCaller = () => void;

// Appliers

export type ParamTarget = Dictionary<any>;

export interface Applier2 {
  name: string;
  test?: (this: this, ...args: any[]) => boolean;
  apply: (this: this, ...args: any[]) => void;
}

export interface ParamApplier2<T extends ParamTarget, P> extends Applier2 {
  test?: (this: this, param: unknown) => boolean;
  apply: (this: this, target: T, param: P) => void;
}

export interface OptionApplier2<T extends ParamTarget> extends Applier2 {
  test?: (this: this, name: string) => boolean;
  apply: (this: this, target: T, name: string, value: unknown) => void;
}

// Option DB

export type OptionDBHandler<T extends ParamTarget, V> = (target: T, value: V) => void;
export type OptionDB<T extends ParamTarget, M extends Dictionary<any>> = { [K in keyof M]: OptionDBHandler<T, M[K]> };

// Params

export type PerformHandlerParam<T extends ParamTarget> = (this: T, target: T) => void;
export type OptionObjectParam<M extends Dictionary<any>> = Partial<M> & Dictionary<any>;
export type PerformOptionParam<T extends ParamTarget, M extends Dictionary<any>> =
  | PerformHandlerParam<T>
  | OptionObjectParam<M>;

// Value Types

export type Listener<T, E extends Event> = (this: T, event: E) => void;
export type EventObject<T extends EventTarget, M extends Dictionary<any>> = {
  [K in keyof M]?: Listener<T, M[K]>
};
