
/**
 * Tenemos una lista de billetes [5, 5, 10, 20, 50, 50, 100, 500, 1000], y un producto c de una maquina que no da cambio.
 * Queremos gastar la menor cantidad de plata y la menor cantidad de billetes.
 * Hay superposicion de problemas cuando sucede que tenemos muchos billetes iguales y el costo es chico. 
 * 
 * 
*/

const bestPayment = (p1, p2) => {
    if(p1[0] < p2[0]) return p1
    if(p2[0] < p1[0]) return p2
    else return p1[1] < p2[1] ? p1 : p2
}

const minPayment = (B, c, i) => {
    if(i < 0 || c <= 0) return [c,0]
    let op1 = minPayment(B, c, i - 1)
    let op2 = minPayment(B, c - B[i], i - 1)
    op2[1] ++
    return bestPayment(op1,op2)
}

const minPaymentMemo = (B, c, i, memo = {}) => {
    if(i < 0 || c <= 0) return [c, 0]
    if(`${c},${i}` in memo) return memo[`${c},${i}`]
    let op1 = minPayment(B, c, i - 1, memo)
    let op2 = minPayment(B, c - B[i], i - 1, memo)
    op2[1]++
    memo[`${c},${i}`] = bestPayment(op1, op2)
    return memo[`${c},${i}`]
}

let billetes = [2,3,5,10]
let costo = 14

console.log(minPaymentMemo(billetes, costo, billetes.length - 1))