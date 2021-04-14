/**
 * Ejemplo, vara de madera de 10m:
 *      |   |   |   |   |   |   |   |   |   |   |
 *      0m  1   2   3   4   5   6   7   8   9   10m
 * 
 *  Primera forma de cortar:
 *      |   |   |       |   |   |   |   |   |   |   |   |               $10
 *      0   1   2       0   1   2   3   4   5   6   7   8    
 *      
 *      |   |   |       |   |   |       |   |   |   |   |   |   |       $8
 *      0   1   2       0   1   2       0   1   2   3   4   5   6
 * 
 *      |   |   |       |   |   |       |   |   |   |       |   |   |   $6
 *      0   1   2       0   1   2       0   1   2   3       0   1   2
 * 
 *  Segunda forma de cortar:
 *      |   |   |   |   |       |   |   |   |   |   |   |               $10
 *      0   1   2   3   4       0   1   2   3   4   5   6
 * 
 *      |   |   |       |   |   |       |   |   |   |   |   |   |       $4
 *      0   1   2       0   1   2       0   1   2   3   4   5   6
 * 
 *      |   |   |       |   |   |       |   |   |   |       |   |   |   $6
 *      0   1   2       0   1   2       0   1   2   3       0   1   2
 * 
 *  Formulación recursiva para hallar el minimo costo posible (mcp):
 *      C = {2,4,7}
 *      mcp(i,j) = {
 *          - 0                                                         no existe c / i < c < j
 *          - j-i + min(
 *              mcp(i,c) + mcp(c,j) Para todo c en C tal que i < c < j
 *          )                                                           en otro caso   
 *      }
 *      
 */

// Instancia a resolver:
var C = [2,4,7];  // arreglo de precios
var largo = 10;

var M = [];  // matriz de memorizacion
for (let i = 0; i < largo+1; i++) M.push(new Array(largo+1).fill(null));

function min(v){
    if (v.length == 0) return 0;
    let res = v[0];
    for (let x = 1; x < v.length; x++) {
        if(res > v[x]) res = v[x];
    }
    return res;
}

function mcp(i,j){
    if(C.filter(c => i < c && c < j).length == 0) return 0;
    
    if (M[i][j] == null){
        let soluciones = [];
        C.forEach(c => { if (i < c && c < j) soluciones.push(mcp(i,c) + mcp(c,j));});
        M[i][j] = j-i + min(soluciones);
    }
    return M[i][j];
}

console.log(mcp(0,10))