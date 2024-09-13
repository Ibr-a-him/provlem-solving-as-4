let numbers = [5, 6, 11, 12, 98, 5];
let num = [];
for (let itme of numbers) {
  if (itme === 5) {
    num.push(itme);
  }
}
console.log(num.length);


let  sentence = 'I am learning Programming to become a programmer';

let words = sentence.split('');
let bigWord = '';

for (let word of words) {
  if (word.length > bigWord.length) {
    bigWord = word;
  }
}
console.log(bigWord);