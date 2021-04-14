/*
* Complejidad Temporal (pd) -> O(nk), porque como habia O(nk) posibles entradas para subsetSum,
* entonces al calcularlas, si las vuelvo a necesitar, ya las voy a tener en el diccionario. 
* Entonces, como subsetSumRecursive -> O(2^n), si k << 2^n, conviene utilizar la solucion dinamica.
* En cambio, si k esta suficientemente cerca de 2^n, no ganamos mucho. De hecho, empeora ya que tenemos (si k ~ 2^n)
* subsetSum -> O(n * 2^n). 
*/

let calls = 0

const subsetSumRecursive = (C, i, j) => {
    calls++
    if(j < 0) return false
    if(i === 0) return j === 0
    return subsetSumRecursive(C, i - 1, j) || subsetSumRecursive(C, i - 1, j - C[i])
}

const subsetSum = (C, i, j, memo = {}) => {
    calls++
    if(j < 0) return false
    if(i === 0) return j === 0
    if(memo[`${i},${j}`] === undefined){
        memo[`${i},${j}`] = subsetSum(C, i - 1, j, memo) || subsetSum(C, i - 1, j - C[i], memo)
    }
    return memo[`${i},${j}`]
}

let test = [1, 3, 5, 6, 6, 9, 12, 23, 25, 26, 26, 30, 39, 40, 42, 54, 65, 74, 82, 92, 102, 234, 300]
let k1 = 15
let k2 = 7

console.log("Recursive implementation: ")
console.log(subsetSumRecursive(test, test.length - 1, k1))
console.log(`Calls made ${calls}`)
calls = 0
console.log(subsetSumRecursive(test, test.length - 1, k2))
console.log(`Calls made ${calls}`)
calls = 0

console.log("Dynamic implementation: ")
console.log(subsetSum(test, test.length - 1, k1))
console.log(`Calls made ${calls}`)
calls = 0
console.log(subsetSum(test, test.length - 1, k2))
console.log(`Calls made ${calls}`)
calls = 0
