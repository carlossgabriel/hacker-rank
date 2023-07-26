const houseStart = 7;
const houseEnd = 11;
const appleTree = 5;
const orangeTree = 15;
const arrayApples = [-2, 2, 1];
const arrayOranges = [5, -6];

function countApplesAndOranges(
  start,
  end,
  appleTreePosition,
  orangeTreePosition,
  apples,
  oranges
) {
  let applesResult = 0;
  let orangesResult = 0;
  apples.forEach((apple) => {
    const distanceFromTree = appleTreePosition + apple;
    if (distanceFromTree >= start && distanceFromTree <= end) {
      applesResult++;
    }
  });

  oranges.forEach((orange) => {
    const distanceFromTree = orangeTreePosition + orange;
    if (distanceFromTree >= start && distanceFromTree <= end) {
      orangesResult++;
    }
  });

  console.log(applesResult);
  console.log(orangesResult);
  return [applesResult, orangesResult];
}

const result = countApplesAndOranges(
  houseStart,
  houseEnd,
  appleTree,
  orangeTree,
  arrayApples,
  arrayOranges
);
console.log(result);
