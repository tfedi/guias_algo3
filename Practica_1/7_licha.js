/**
 * Ej 7.
 * 
 * a) Formulacion recursiva: 
 * MGN(c, j) = 0 si c < 0 o c > j 
 * MGN(c, j) = max(
 *                  MGN(c - 1, j - 1) - a[j] -> Compre uno,
 *                  MGN(c + 1, j - 1) + a[j] -> Vendi uno,
 *                  MGN(c, j - 1) -> No opero
 *             )
 *  
 */

const astroVoidBU = (a, c, j) => { // To Do 
    if(c < 0 || j === a.length) return 0
    let m = Math.max(
        astroVoidBU(a, c + 1, j + 1) - a[j], // Compre un asteroide en el dia j y veo que hago en el siguiente dia con un asteroide mas
        astroVoidBU(a, c - 1, j + 1) + a[j], // Vendi un asteroide en el dia j y veo que hago en el siguiente dia con un asteroide menos
        astroVoidBU(a, c, j + 1) // No hago nada
    )
    return m
}

const astroVoid = (a, c, j) => {
    if(c < 0 || c > j) return Number.NEGATIVE_INFINITY
    if(j === 0) return 0
    let m1 = astroVoid(a, c - 1, j - 1) - a[j-1] 
    let m2 = astroVoid(a, c + 1, j - 1) + a[j-1]
    let m3 = astroVoid(a, c, j - 1)
    let m = Math.max(m1, m2, m3)
    return m
}

const astroVoidMemo = (a, c, j, memo = {}) => {
    if(c < 0 || c > j) return Number.NEGATIVE_INFINITY
    if(j === 0) return 0
    if(`${c},${j}` in memo) return memo[`${c},${j}`]
    memo[`${c},${j}`] = Math.max(
        astroVoidMemo(a, c - 1, j - 1, memo) - a[j-1],
        astroVoidMemo(a, c + 1, j - 1, memo) + a[j-1],
        astroVoidMemo(a, c, j - 1, memo)
    )
    return memo[`${c},${j}`]
}

let asteroides = [3,6,10]
console.log(astroVoid(asteroides, 0, asteroides.length))
console.log(astroVoidMemo(asteroides, 0, asteroides.length))