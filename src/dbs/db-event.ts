import eachProp from "../each-prop";
import { addEventHelper, remEventHelper } from "../helpers";
import { Dictionary, EventObject, Listener, OptionDB } from "../types";

type Target = EventTarget;

interface IEventOptionMap<T extends Target, M extends Dictionary<Event>> {
  events: EventObject<T, M> & Dictionary<Listener<T, Event>>;
  on: EventObject<T, M> & Dictionary<Listener<T, Event>>;
  off: EventObject<T, M> & Dictionary<Listener<T, Event>>;
}

function events<T extends Target, M extends Dictionary<Event>>(
  target: T,
  value: EventObject<T, M> & Dictionary<Listener<T, Event>>,
) {
  eachProp<Target>(
    value,
    addEventHelper,
    target,
  );
}

const eventOptionDB: OptionDB<Target, IEventOptionMap<Target, Dictionary<Event>>> = {

  events,
  on: events,

  off(target, value) {
    eachProp<Target>(
      value,
      remEventHelper,
      target,
    );
  },

};

export default eventOptionDB;
