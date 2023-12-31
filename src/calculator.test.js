import add from './calculator'

describe('add when', () => {
  it('string is empty', () => {
    expect(add('')).toBe(0)
  })

  it('string has one number', () => {
    expect(add('1')).toBe(1)
  })

  it('string has 2 numbers', () => {
    expect(add('1,2')).toBe(3)
  })

  it('string has different delimeter', () => {
    expect(add('1\n2,3')).toBe(6)
  })

  it('string has custom separator', () => {
    expect(add('//;\n1;2')).toBe(3)
  })
})
