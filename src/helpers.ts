import { Listener, ParamTarget } from './types';

export function setPropHelper(value: unknown, name: string, target: ParamTarget): void {
  target[name] = value;
}

export function addEventHelper(listener: Listener<EventTarget, Event>, type: string, target: EventTarget): void {
  target.addEventListener(
    type,
    listener,
    false,
  );
}

export function remEventHelper(listener: Listener<EventTarget, Event>, type: string, target: EventTarget): void {
  target.removeEventListener(
    type,
    listener,
    false,
  );
}
