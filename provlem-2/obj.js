const computer = {
  brand: 'backbook',
  price: 30000,
  processor: 'inteal',
  hdd:'512GB',
};

const key = Object.keys(computer);
console.log(key)
const value = Object.values(computer);
console.log(value);
computer.brand = 'chuwi';
const updatValue = Object.values(computer)
console.log(updatValue)

