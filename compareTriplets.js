let arrayA = [17, 28, 30];
let arrayB = [99, 16, 8];

function compareTriplets(a, b) {
  let aPoints = 0;
  let bPoints = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      bPoints++;
    } else if (a[i] < b[i]) {
      aPoints++;
    }
  }
  console.log(aPoints, bPoints);
  return [bPoints, aPoints];
}

compareTriplets(arrayA, arrayB);
