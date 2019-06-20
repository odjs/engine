export type AnyFunction = (this: any, ...args: any[]) => any;
export type Dictionary<V> = Record<string, V>;

// Appliers

export type ParamTarget = Record<keyof any, any>;

export interface ParamApplier<T extends ParamTarget, P> {
  test?: (this: this, param: unknown) => boolean;
  apply: (this: this, target: T, param: P) => void;
}

export interface OptionApplier<T extends ParamTarget> {
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
