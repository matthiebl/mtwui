import classes, { leafStrings } from '../../src/utils/classes'

describe('leafStrings', () => {
  it('should turn a string into a string list with itself', () => {
    const data = 'raw-string'

    const result = leafStrings(data)

    expect(result.sort()).toStrictEqual([data].sort())
  })

  it('should turn an object of strings into a list of all the strings', () => {
    const data = {
      key1: 'a value',
      key2: 'simple-val',
      anything: 'something interesting',
    }

    const result = leafStrings(data)

    expect(result.sort()).toStrictEqual(['a value', 'simple-val', 'something interesting'].sort())
  })

  it('should turn a nested object of strings and objects into a list of strings', () => {
    const data = {
      key1: 'a value',
      key2: {
        depth: 'this is cool',
        evenMore: {
          key: 'this is deep',
        },
      },
      anything: 'something interesting',
    }

    const result = leafStrings(data)

    expect(result.sort()).toStrictEqual(
      ['a value', 'this is cool', 'this is deep', 'something interesting'].sort(),
    )
  })
})

describe('classes', () => {
  it('should join all strings with a space', () => {
    const data = 'plain-string'
    expect(classes(data)).toBe('plain-string')

    const nestedData = {
      key1: 'data1',
      key2: 'data2',
      key3: 'data3',
    }
    expect(classes(nestedData)).toBe('data1 data2 data3')
  })
})
