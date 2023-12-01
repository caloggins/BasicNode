const add = (input) => {
  if (input === '') return 0

  const pattern = /\n|\,/

  return input.split(pattern)
    .map(o => parseInt(o))
    .reduce((a, b) => a + b, 0)
}

export default add
