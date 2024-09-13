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

console.log(waitingTime((array = [7, 8, 3, 4, 5]), (serialNumber = "6")));
