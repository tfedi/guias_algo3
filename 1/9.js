const minLife = (A, i, j) => {
    if(i == A.length - 1 && j == A[0].length - 1) return A[i][j];
    
    if (j >= A[0].length || i >= A.length) return Infinity;
   
    let solutionA = A[i][j] + minLife(A, i, j + 1);
    let solutionB = A[i][j] + minLife(A, i + 1, j);

    return Math.abs(solutionA) < Math.abs(solutionB) ? solutionA : solutionB;
}

const minLifePath = A => {
    return Math.abs(minLife(A, 0, 0)) + 1
}

/**
 * minLifeRecursivo(i,j)={
 *      - inf               si i >= n o j >= m
 *      - |A[i][j]| + 1     si i == n-1 y j == m-1
 *      - max(min(minLifeRecursivo(i+1,j), minLifeRecursivo(i,j+1)) - A[i][j], 1)
 * }
 * 
 * minLifeRecursivo(i,j): "cantidad minima de vida que necesito para llegar a la esquina (n-1,n-1) partiendo desde la posicion (i,j)"
 */


var M = [];  // matriz de memoizacion
for (let i = 0; i < 4; i++) M.push(new Array(4).fill(null));

const minLifeRecursive = (A, i, j) => {
    if(i >= A.length || j >= A[0].length) return Infinity;
    if(i == A.length-1 && j == A[0].length-1) return Math.abs(A[i][j])+1
    
    if(M[i][j] == null){
        let sol1 = minLifeRecursive(A, i + 1, j) - A[i][j];
        let sol2 = minLifeRecursive(A, i, j + 1) - A[i][j];
        M[i][j] = Math.max(Math.min(sol1,sol2), 1);
    }
    
    return M[i][j]; 
}
let mat = [
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
];

console.log(minLifePath(mat));
console.log(minLifeRecursive(mat, 0, 0));