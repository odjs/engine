import { OptionApplier2 } from "../types";

const eventOnOptionApplier: OptionApplier2<EventTarget> = {

  name: "on-event",

  test: (optionName) => /^on\w+$/.test(optionName),

  apply(target, optionName, value) {
    target.addEventListener(
      optionName.substr(2),
      value as EventListener,
      false,
    );
  },

};

export default eventOnOptionApplier;
