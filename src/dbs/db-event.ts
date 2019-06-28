import { eachProp } from "../each-prop";
import { addEventHelper, remEventHelper } from "../helpers";
import { Dictionary, EventObject, Listener, OptionDB } from "../types";

export interface EventOptionMap<T extends EventTarget, M extends Dictionary<Event>> {
  events: EventObject<T, M> & Dictionary<Listener<T, Event>>;
  on: EventObject<T, M> & Dictionary<Listener<T, Event>>;
  off: EventObject<T, M> & Dictionary<Listener<T, Event>>;
}

function events<T extends EventTarget, M extends Dictionary<Event>>(
  target: T,
  value: EventObject<T, M> & Dictionary<Listener<T, Event>>,
) {
  eachProp<EventTarget>(
    value,
    addEventHelper,
    target,
  );
}

export const eventOptionDB: OptionDB<EventTarget, EventOptionMap<EventTarget, Dictionary<Event>>> = {

  events,
  on: events,

  off(target, value) {
    eachProp<EventTarget>(
      value,
      remEventHelper,
      target,
    );
  },

};
