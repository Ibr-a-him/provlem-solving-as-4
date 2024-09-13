function emailChack(email) {
  if (email.indexOf('@') === -1) {
    return 'Invalid Email';
  }

  let atEmail = email.split('@');
  let username = atEmail[0];
  let domain = atEmail[1];

  if (username && domain) {
    return true;
  } else {
    return 'Invalid Email';
  }
}
console.log(emailChack('rakib@gmail.com'));


function lastLetterChack(lastLitter) {
  let last = lastLitter.slice(-1);
  let nam = ['a', 's', 'f', 'g', ' h', 'j', 'i'];

  for (let item of nam) {
    if (item === last) {
      return true;
    } 
  }
  return false;
}

console.log(lastLetterChack('amitum'));


function chack(array) {
  let n = [];
  for (let item of array) {
    if (typeof item === 'string') {
      n.push(item)
    }
  }
  return n;
}

console.log(chack(['a',NaN,undefined, 1, false]))
