function matrixElementsSum(matrix) {
    let total = 0;
     
    for (let i=0; i<matrix.length; i++){
      for (let j=0; j<matrix[i].length; j++){
        if (matrix[i][j] === 0) {
          for (let k=i+1; k<matrix.length; k++){
            matrix[k][j] = 0;
          }
        }
      }
    }
     
    for (let x=0; x<matrix.length; x++){
      for (let y=0; y<matrix[x].length; y++){
        total += matrix[x][y]
      }
    }
     
    return total;
 }