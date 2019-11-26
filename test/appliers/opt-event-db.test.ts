import { applyOptionObject, eventDBOptionApplier } from '../../src'
import { createMockEventTarget } from '../helpers/event-target'

describe('event db option applier', () => {

  test('should apply event options', () => {

    const target = createMockEventTarget()
    const appliers = [eventDBOptionApplier]

    const listener = () => { /**/ }
    const optionObject = {
      events: {
        load: listener,
      },
    }

    applyOptionObject(target, optionObject, appliers)

    expect(target.listeners.load).toBe(listener)

  })

  test('should apply on options', () => {

    const target = createMockEventTarget()
    const appliers = [eventDBOptionApplier]

    const listener = () => { /**/ }
    const optionObject = {
      on: {
        load: listener,
      },
    }

    applyOptionObject(target, optionObject, appliers)

    expect(target.listeners.load).toBe(listener)

  })

  test('should apply on options', () => {

    const target = createMockEventTarget()
    const appliers = [eventDBOptionApplier]

    const listener = () => { /**/ }

    applyOptionObject(target, {
      on: {
        load: listener,
      },
    }, appliers)

    expect(target.listeners.load).toBe(listener)

    applyOptionObject(target, {
      off: {
        load: listener,
      },
    }, appliers)

    expect(target.listeners.load).toBeUndefined()

  })

})
