function sendNotification(email) {
  let username = '';
  let domainName = '';
  let atFound = false;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      atFound = true;
    } else if (!atFound) {
      username += email[i];
    } else {
      domainName += email[i];
    }
  }

if (!atFound ||username === '' || domainName === '') {
    return 'Invalid Email';
  }

  return username + ' sent you an email from ' + domainName;
}



console.log(sendNotification('fahim234.hotmail.com'));

