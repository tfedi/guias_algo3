const armarParejas = (conjA, conjB) => {
    let result = []
    let stepA = 0;
    let stepB = 0;
    while(stepA < conjA.length && stepB < conjB.length){
        if(Math.abs(conjA[stepA] - conjB[stepB]) <= 1){
            result.push([conjA[stepA], conjB[stepB]]);
            stepA++;
            stepB++;
        }
        else if(conjA[stepA] > conjB[stepB]){
            stepB++;
        }
        else{
            stepA++;
        }
    }
    return result.length;
}

let test = [
    [1,2,4,6],
    [1,5,5,7,9]
];

let test2 = [
    [1,1,1,1,1],
    [1,2,3]
] // --> 2  elems

/**
 * Demostracion:  
 * <=) El greedy encontro una solucion. Por como esta implementado, la solucion nos devuelve el tamaño del conjunto de las primeras parejas 
 * tales que su diferencia de habilidad es <= 1. Como ambos multiconjuntos estan ordenados, la implementacion del algoritmo va tomando los primeros pares que cumplan
 * dicha condicion. Antes de finalizar, result = { (p_x1, p_x2), (p_z1, p_z2), ...}. Tambien, por como esta implementado el algoritmo, 
 * nunca se agrega el mismo elemento mas de una vez. Finalizando, como cada par cumple con la propiedad, y no se agregan pares de mas ni repetidos, el tamaño de este conjunto
 * es justamente lo que estamos buscando. Luego, result es una solucion valida. 
 * 
 * 
 * =>)  Supongamos que existe una secuencia de parejas S ordenada primero por los miembros del grupo 1 y luego por los miembros del grupo 2.
 *      tal que #S = #E+1 donde E es la secuencia de parejas encontrada por el goloso. Es decir, hay al menos una pareja que el algoritmo goloso no encontró.
 *      
 *      Sea S_i la pareja que el goloso no encontró. Como S está ordenado, sabemos que 
 *
 *      S_i-1[0] < S_i[0] < S_i+1[0] y 
 *      S_i-1[1] < S_i[1] < S_i+1[1]
 *     
 *      Ahora bien, si el algoritmo encontró todas las demas, en particular encontró S_i-1 y S_i+1.
 */

console.log(armarParejas(test[0], test[1]))
console.log(armarParejas(test2[0], test2[1]))
