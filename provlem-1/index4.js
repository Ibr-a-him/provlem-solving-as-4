const parson = {
  name: 'Rajib',
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
};


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

console.log(calculateFinalScore(parson));
