const arr = [1,2,3,4,-1,0,0,-3];
function plusMinus(array) {
  const arrLen = array.length
  const counts = array.reduce((acc, currentValue)=>{
    if (currentValue > 0) {
      acc.positive++;
    } else if( currentValue < 0){
      acc.negative++;
    } else {
      acc.zero++;
    }
    return acc;
  }, {positive: 0, negative: 0, zero: 0})

  console.log(counts.positive/arrLen)
  console.log(counts.negative/arrLen)
  console.log(counts.zero/arrLen)
}

 

plusMinus(arr);
