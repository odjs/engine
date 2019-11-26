import { applyOption, applyOptionObject, OptionApplier, propOptionApplier } from '../src'

describe('apply options', () => {

  const createMockOptionApplier = (opName: string): OptionApplier<Record<string, any>> => ({
    test: (optionName) => (optionName === opName),
    apply: jest.fn((target, name, value) => {
      target.mock = { name, value }
    }),
  })

  test('should apply single option and stop if match', () => {

    const target = {}

    const mockOptionApplierOnTest = createMockOptionApplier('test')
    const mockOptionApplierOnCancel = createMockOptionApplier('cancel')
    const appliers = [mockOptionApplierOnTest, mockOptionApplierOnCancel]

    applyOption(10, 'test', [target, appliers])

    expect(target).toEqual({ mock: { name: 'test', value: 10 } })
    expect(mockOptionApplierOnTest.apply).toHaveBeenCalledTimes(1)
    expect(mockOptionApplierOnCancel.apply).not.toHaveBeenCalled()

  })

  test('should call next option applier if no match', () => {

    const target = {}

    const mockOptionApplierOnTest = createMockOptionApplier('test')
    const mockOptionApplierOnCancel = createMockOptionApplier('cancel')
    const appliers = [mockOptionApplierOnTest, mockOptionApplierOnCancel]

    applyOption(10, 'cancel', [target, appliers])

    expect(target).toEqual({ mock: { name: 'cancel', value: 10 } })
    expect(mockOptionApplierOnTest.apply).not.toHaveBeenCalled()
    expect(mockOptionApplierOnCancel.apply).toHaveBeenCalledTimes(1)

  })

  test('should apply multiple option', () => {

    const target = {}
    const appliers = [propOptionApplier]
    const options = { key1: true, key2: '', key3: 10 }

    applyOptionObject(target, options, appliers)

    expect(target).toEqual(options)

  })

})
