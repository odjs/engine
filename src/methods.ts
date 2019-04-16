import { eachProp } from "./enumeration";
import { addEventHelper, removeEventHelper, setPropertyHelper } from "./helpers";
import { isObject } from "./type-check";
import { Dictionary, EventObject, ParamTarget } from "./types";

export function setProp<T extends ParamTarget>(element: T, props: Dictionary<any>): T;
export function setProp<T extends Dictionary<any>>(element: T, name: string, value: any): T;
export function setProp<T extends Dictionary<any>>(element: T, name: string | Dictionary<any>, value?: any): T {
  if (isObject(name)) {
    eachProp<T>(
      name,
      setPropertyHelper,
      element,
    );
  } else {
    element[name] = value;
  }
  return element;
}

export function listen<M extends Dictionary<Event>, T extends EventTarget>(target: T, events: EventObject<T, M>): T;
export function listen<M extends Dictionary<any>, T extends EventTarget>(target: T, events: EventObject<T, M>): T;
export function listen<T extends EventTarget>(target: T, type: string, listener: EventListener): T;
export function listen<T extends EventTarget>(target: T, type: string | EventObject<T, Dictionary<any>>, listener?: EventListener): T {
  if (isObject(type)) {
    eachProp<T>(
      type,
      addEventHelper,
      target,
    );
  } else {
    target.addEventListener(
      type,
      listener as EventListener,
      false,
    );
  }
  return target;
}

export function unlisten<M extends Dictionary<Event>, T extends EventTarget>(target: T, events: EventObject<T, M>): T;
export function unlisten<M extends Dictionary<any>, T extends EventTarget>(target: T, events: EventObject<T, M>): T;
export function unlisten<T extends EventTarget>(target: T, type: string, listener: EventListener): T;
export function unlisten<T extends EventTarget>(target: T, type: string | EventObject<T, Dictionary<any>>, listener?: EventListener): T {
  if (isObject(type)) {
    eachProp<T>(
      type,
      removeEventHelper,
      target,
    );
  } else {
    target.removeEventListener(
      type,
      listener as EventListener,
      false,
    );
  }
  return target;
}
