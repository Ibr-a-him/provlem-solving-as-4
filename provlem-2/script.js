const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++){
//   const numbers = numbers[i];
//   console.log(numbers);
// }


const products = [
  { id: 1, name: 'walton phone', price: 12000 },
  { id: 2, name: 'walton laptop', price: 13000 },
  { id: 3, name: 'walton laptop', price: 14000 },
  { id: 4, name: 'walton phone', price: 15000 },
  { id: 5, name: 'walton phone', price: 16000 },
  { id: 6, name: 'walton phone', price: 17000 },
  { id: 7, name: 'walton laptop', price: 18000 },
  { id: 8, name: 'walton phone', price: 20000 },
]

function matchProduct(products,search) {
  const matched = [];
  for (const item of products) {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(item);
    }
  }
  return matched;
}
const result = matchProduct(products, 'phone');
console.log(result);