import {
  applyMultiParamArgs,
  applyMultiPerforOptionParamArgs,
  applyParam,
  applyParamArgs,
  applyPerforOptionParamArgs,
  performParamApplier,
  propOptionApplier,
} from '../src'

describe('apply params', () => {

  const createMockParamApplier = () => ({
    apply: jest.fn((target: Record<string, unknown>, param: unknown) => {
      target.mock = param
    }),
  })

  test('should apply single param and stop if match', () => {

    const theTarget = {}

    const param = (target: Record<string, any>) => {
      target.test = 10
    }

    const mockParamApplier = createMockParamApplier()
    const appliers = [performParamApplier, mockParamApplier]

    applyParam(theTarget, param, appliers)

    expect(theTarget).toEqual({ test: 10 })
    expect(mockParamApplier.apply).not.toHaveBeenCalled()

  })

  test('should call next applier if not match', () => {

    const theTarget = {}

    const param = {}

    const mockParamApplier = createMockParamApplier()
    const appliers = [performParamApplier, mockParamApplier]

    applyParam(theTarget, param, appliers)

    expect(theTarget).toEqual({ mock: param })
    expect(mockParamApplier.apply).toHaveBeenCalledTimes(1)

  })

  test('should apply multiple params on single target', () => {

    const theTarget = {}
    const appliers = [performParamApplier]
    const params = [
      (target: Record<string, any>) => {
        target.key1 = 10
      },
      (target: Record<string, any>) => {
        target.key2 = 20
      },
    ]

    applyParamArgs(theTarget, appliers, params, 0)

    expect(theTarget).toEqual({ key1: 10, key2: 20 })

  })

  test('should apply multiple params on multiple targets', () => {

    const targets = [{}, {}]
    const appliers = [performParamApplier]
    const params = [
      (target: Record<string, any>) => {
        target.key1 = 10
      },
      (target: Record<string, any>) => {
        target.key2 = 20
      },
    ]

    applyMultiParamArgs(targets, appliers, params, 0)

    targets.forEach((target) => {
      expect(target).toEqual({ key1: 10, key2: 20 })
    })

  })

  test('should apply perform/option params on single target', () => {

    const theTarget = {}
    const appliers = [propOptionApplier]
    const params = [
      (target: Record<string, any>) => {
        target.key1 = 10
      },
      { key2: 20 },
    ]

    applyPerforOptionParamArgs(theTarget, appliers, params, 0)

    expect(theTarget).toEqual({ key1: 10, key2: 20 })

  })

  test('should apply perform/option params on multiple targets', () => {

    const targets = [{}, {}]
    const appliers = [propOptionApplier]
    const params = [
      (target: Record<string, any>) => {
        target.key1 = 10
      },
      { key2: 20 },
    ]

    applyMultiPerforOptionParamArgs(targets, appliers, params, 0)

    targets.forEach((target) => {
      expect(target).toEqual({ key1: 10, key2: 20 })
    })

  })

})
