const studentsGrades = [73, 67, 38, 33];

function gradingStudents(grades) {
  return grades.reduce((acc, curr) => {
    if (curr < 38) {
      acc.push(curr);
    } else if (curr % 5 > 2) {
      acc.push(Math.ceil(curr / 5) * 5);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

const result = gradingStudents(studentsGrades);
console.log(result);
