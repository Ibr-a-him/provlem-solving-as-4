function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'Invalid Input';
  }

  for (let item of name) {
    if (!isNaN(item) && item !== ' ') {
      return true;
    }
  }
  return false;
}


const checkDigits = checkDigitsInName('Raj123');
console.log(checkDigits);
