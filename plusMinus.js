const arr = [1,2,3,4,-1,0,0,-3];
function plusMinus(array) {
  console.log(array);
  const arrLen = array.length;
  let positive = 0
  let zero = 0
  let negative = 0
  array.map(item=>{
    if(item > 0){
      positive++
    }
    else if (item < 0){
      negative++
    } else {
      zero ++
    }
  })
  console.log({
    positive, zero, negative
  })
  const positiveRatio = positive / arrLen 
  const negativeRatio = negative / arrLen  
  const zeroRatio = zero /  arrLen  
  console.log(positiveRatio)
  console.log(negativeRatio)
  console.log(zeroRatio)
}

 

plusMinus(arr);
