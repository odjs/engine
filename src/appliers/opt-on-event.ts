import { OptionApplier } from '../types';

const eventOnOptionApplier: OptionApplier<EventTarget> = {

  test: (optionName) => /^on\w+$/.test(optionName),

  apply(target, optionName, value) {
    target.addEventListener(
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      optionName.substr(2),
      value as EventListener,
      false,
    );
  },

};

export default eventOnOptionApplier;
