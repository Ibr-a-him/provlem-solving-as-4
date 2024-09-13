function calculateTax(income, expenses) {
  if (
    typeof income !== 'number' ||
    typeof expenses !== 'number' ||
    income < 0 ||
    expenses < 0 ||
    income < expenses
  ) {
    return 'Invalid Input';
  }
  const monthlyIncome = income - expenses;
  const saving = monthlyIncome * 0.2;

  return saving;
}


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

  if (!atFound || username === '' || domainName === '') {
    return 'Invalid Email';
  }

  return username + ' sent you an email from ' + domainName;
}



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



function calculateFinalScore(obj) {
  if (typeof obj !== 'object') {
    return 'Invalid Input ';
  }
  if (
    typeof obj.name !== 'string' ||
    typeof obj.testScore !== 'number' ||
    obj.testScore > 50 ||
    typeof obj.schoolGrade !== 'number' ||
    obj.schoolGrade > 30 ||
    typeof obj.isFFamily !== 'boolean'
  ) {
    return 'Invalid Input';
  }

  let totalMarks = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    totalMarks = totalMarks + totalMarks * 0.2;
  }

  if (totalMarks >= 80) {
    return true;
  } else {
    return false;
  }
}


function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
    return 'Invalid Input';
  }

  let sum = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    sum = sum + waitingTimes[i];
  }

  const averageMark = Math.round(sum / waitingTimes.length);

  const serialRemaing = serialNumber - waitingTimes.length - 1;
  const reaminingTime = averageMark * serialRemaing;

  return reaminingTime;
}
