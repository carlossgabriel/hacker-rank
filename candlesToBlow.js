const candlesArray = [1, 2, 6, 5, 6, 6];
function birthdayCakeCandles(candles) {
  // Write your code here
  const biggestCandle = Math.max(...candles);

  return candles.filter((candle) => candle === biggestCandle).length;
}

console.log(birthdayCakeCandles(candlesArray));
