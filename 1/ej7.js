/*
 Formulacion recursiva:
    mgn(j,c) = {
        - menos infinito    si c < 0 o c > j
        - 0                 si j = 0
        - max(
            mgn(j-1, c-1) - p[j-1],
            mgn(j-1, c+1) + p[j-1],
            mgn(j-1, c)
        )                   en otro caso
    }

    mgn(n,0) resuelve el problema, ya que quiero terminar el día n (el último) con 0 asteroides.
*/


// Instancia a resolver:
var p = [3,2,5,6];  // arreglo de precios
let n = 4;          // cant. de dias

// Otras cosas:
var M = [];  // matriz de memorizacion
for (let i = 0; i < n+1; i++) M.push(new Array(n+1).fill(null));

var minfty = Number.NEGATIVE_INFINITY;

// Memorización de valores
for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
        M[i][k] = mgn(i,k);
    }
}

// Algoritmo
function mgn(j, c){
    if (c < 0 || c > j) return minfty;

    if(j == 0) return 0;

    /**
     * Aclaración: como p[0] es el precio del asteroide en el día 1, 
     * p[j-1] es el precio del asteroide en el día j.
     */

    if(M[j][c] == null){
        let sol1 = mgn(j-1, c-1) - p[j-1];  // comprar
        let sol2 = mgn(j-1, c+1) + p[j-1];  // vender
        let sol3 = mgn(j-1, c);             // no hacer nada
        
        M[j][c] = Math.max(sol1,sol2,sol3);
    }
    return M[j][c];
}

// Llamada que resuelve el problema
console.log(mgn(n,0));