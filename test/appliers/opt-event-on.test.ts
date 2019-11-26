import { applyOptionObject, eventOnOptionApplier } from '../../src'
import { createMockEventTarget } from '../helpers/event-target'

describe('on-event option applier', () => {

  test('should apply and stop if it\'s an on-event option', () => {

    const target = createMockEventTarget()

    const apply = jest.fn()
    const mockOptionApplier = {
      name: 'mock',
      apply,
    }

    const appliers = [eventOnOptionApplier, mockOptionApplier]

    const listener = () => { /**/ }

    const options = {
      ontest: listener,
    }

    applyOptionObject(target, options, appliers)

    expect(target.listeners.test).toBe(listener)
    expect(apply).not.toHaveBeenCalled()

  })

  test('should call next applier if it\'s not a on-event option', () => {

    const target = createMockEventTarget()

    const apply = jest.fn()
    const mockOptionApplier = {
      name: 'mock',
      apply,
    }

    const appliers = [eventOnOptionApplier, mockOptionApplier]

    const listener = () => { /**/ }

    const options = {
      test1: listener,
      test2: listener,
    }

    applyOptionObject(target, options, appliers)

    expect(apply).toHaveBeenCalledTimes(2)

  })

})
