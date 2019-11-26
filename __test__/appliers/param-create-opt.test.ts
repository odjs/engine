import { applyParam, createOptionParamApplier, OptionApplier, ParamTarget } from '../../src'

describe('option param applier', () => {

  const nameToValueOptionApplier: OptionApplier<ParamTarget> = {
    apply(target, name) {
      target[name] = name
    },
  }

  const paramAppliers = [createOptionParamApplier([
    nameToValueOptionApplier,
  ])]

  test('should create param applier', () => {

    const target = {}

    applyParam(target, { prop: true }, paramAppliers)

    expect(target).toEqual({ prop: 'prop' })

  })

})
