import { Listener, ParamTarget } from "./types";

export function setPropertyHelper(value: any, name: string, target: ParamTarget) {
  target[name] = value;
}

export function addEventHelper(listener: Listener<EventTarget, Event>, type: string, target: EventTarget) {
  target.addEventListener(
    type,
    listener,
    false,
  );
}

export function removeEventHelper(listener: Listener<EventTarget, Event>, type: string, target: EventTarget) {
  target.removeEventListener(
    type,
    listener,
    false,
  );
}
