// fib

let arr  = [0,1]
let n = 10;

for(let i =2; i<=n; i++) {
arr.push(arr[i-1]+arr[i-2])
}

console.log(arr)

// factorial

let num = 3;
let fact = 1;
for(let i=1; i<=num; i++) {
    fact*=i;
}
console.log(fact)
