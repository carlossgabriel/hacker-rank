function diagonalDifference(arr) {
    // Write your code here
  const arrSize = arr
  console.log(arrSize) // [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
  const leftToRightDiagonal = arr.map((line, index)=>{
    return line[index]
  })
  
  const len = arr.length
  
  const rightToLeftDiagonal= arr.map((row, index)=>{
    return row[len - index - 1]
  })

  const a = leftToRightDiagonal.reduce((prev, cur)=>prev+cur)
  const b = rightToLeftDiagonal.reduce((prev, cur)=>prev+cur)
  return Math.abs(a - b)
}
