

let n = 100;
let primeArr:any = [];

for(let i=1; i<= n ; i++) {
    if(checkPrime(i)) {
        primeArr.push(i)
    }
}


console.log(primeArr)

function checkPrime(num:any) {
    if(num <= 1) {
        return false;
    }
    for(let i = 2; i<num; i++) {
        if(num%i == 0) {
            return false;
        }
    }
    return true
}
