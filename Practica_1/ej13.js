
const minCost = (l = []) => {
    l.sort((a,b) => a - b); // O(n log n)
    let cost = 0;
    let currentSum = 0;
    for(let i = 0; i < l.length - 1; i++){ // O(n)
        if(i === 0){
            currentSum = l[i] + l[i + 1];
            cost += currentSum;
        }
        else{
            currentSum += l[i + 1]; 
            cost += currentSum;
        }
    }
    return cost; // Overall complexity = O(n log n) + O(n) <= O(n log n)
}

const test1 = [5,2,1];
const test2 = [5,7,9,1];

console.log(minCost(test1));
console.log(minCost(test2));