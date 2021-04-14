
/**
 * 
 * 
 * 
 */

const minLife = (A, i, j, currentLife) => {
    if(i == A.length - 1 && j == A[0].length - 1) return A[i][j] + 1;
    let solutionA, solutionB;
    if(i >= A.length) i = 0
    if(j >= A[0].length) j = 0
    if(j + 1 < A[0].length && currentLife + A[i][j+1] > 0){
        currentLife += A[i][j + 1];
        solutionA = minLife(A, i, j + 1, currentLife);
        currentLife -= A[i][j + 1];
    }
    if(i + 1 < A.length && currentLife + A[i + 1][j] > 0){
        currentLife += A[i + 1][j];
        solutionB = minLife(A, i + 1, j, currentLife);
        currentLife -= A[i + 1][j];
    }
    return Math.min(solutionA, solutionB);
}

let mat = [
    [2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
]

console.log(minLife(mat, 0, 0, 0))