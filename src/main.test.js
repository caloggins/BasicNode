import add from './main'

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
})
