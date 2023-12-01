const add = (input) => {
  if (input === '') return 0

  return input.split(',')
    .map(o => parseInt(o))
    .reduce((a, b) => a + b, 0)
}

export default add
