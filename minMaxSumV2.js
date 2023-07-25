function minMaxSum(arr) {
  let minValue = Infinity;
  let maxValue = -Infinity;

  const [sumWithoutMin, sumWithoutMax] = arr.reduce(
    ([sumMin, sumMax], current) => {
      if (current < minValue) {
        minValue = current;
      }
      if (current > maxValue) {
        maxValue = current;
      }
      return [sumMin + current, sumMax + current];
    },
    [0, 0]
  );

  return [sumWithoutMin - minValue, sumWithoutMax - maxValue];
}

// Example usage:
const array = [5, 10, 2, 8, 3];
const [sumWithoutMin, sumWithoutMax] = minMaxSum(array);
console.log("Sum without the smallest value:", sumWithoutMin);
console.log("Sum without the largest value:", sumWithoutMax);
