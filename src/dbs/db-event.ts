import eachProp from "../each-prop";
import { addEventHelper } from "../helpers";
import { Dictionary, EventObject, Listener, OptionDB } from "../types";

type Target = EventTarget;

interface IEventOptionMap<T extends Target, M extends Dictionary<Event>> {
  events: EventObject<T, M> & Dictionary<Listener<T, Event>>;
}

const eventOptionDB: OptionDB<Target, IEventOptionMap<Target, Dictionary<Event>>> = {

  events(target, value) {
    eachProp<Target>(
      value,
      addEventHelper,
      target,
    );
  },

};

export default eventOptionDB;
