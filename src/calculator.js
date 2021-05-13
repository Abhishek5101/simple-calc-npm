const checkType = (numbers) => {
  // if (typeof a !== 'number' || typeof b !== 'number') throw new Error('You must use two numbers')
  numbers.forEach(number => {
    if (typeof number !== 'number') throw new Error('You must use only numbers')
  })
}

const calculator = {
  add: (...numbers) => {
    checkType(numbers)
    const nums = numbers.reduce((total, current) => total + current)
    return nums
  },
  subtract: (...numbers) => {
    checkType(numbers)
    const nums = numbers.reduce((total, current) => total - current)
    return nums
  },
  multiply: (...numbers) => {
    checkType(numbers)
    const nums = numbers.reduce((total, current) => total * current)
    return nums
  },
  divide: (a, b) => {
    checkType([a,b])
    return a / b
  }
}
module.exports = calculator