import { NextApplierCaller } from "../types";

function eventOnOptionApplier(target: EventTarget, name: string, value: EventListener, next: NextApplierCaller): void {
  if (/^on\w+$/.test(name)) {
    target.addEventListener(
      name.substr(2),
      value,
      false,
    );
  } else {
    next();
  }
}

export default eventOnOptionApplier;
