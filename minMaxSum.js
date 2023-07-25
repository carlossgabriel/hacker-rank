const arr = [1, 2, 3, 4, 5];

function minMaxSum(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  const arrayCopy = [...array];
  const copy2 = [...array];
  arrayCopy.splice(array.indexOf(min), 1);

  copy2.splice(array.indexOf(max), 1);
  const sumWithoutMin = arrayCopy.reduce((acc, currentValue) => {
    return acc + currentValue;
  });

  const sumWithoutMax = copy2.reduce((acc, currentValue) => {
    return acc + currentValue;
  });

  console.log(sumWithoutMax, sumWithoutMin);
}

minMaxSum(arr);
