type NestedStrings = {
  [key: string]: NestedStrings | string
}

export const leafStrings = (data: NestedStrings | string): string[] => {
  if (typeof data === 'object') {
    return Object.values(data)
      .map(value => leafStrings(value))
      .flatMap(value => value)
  }
  return [data]
}

const classes = (data: NestedStrings | string): string => leafStrings(data).join(' ')

export default classes
