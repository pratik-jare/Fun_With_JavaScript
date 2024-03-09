
let objectList: any = {
    obj1: ['a', 'b', 'c'],
    obj2: ['hh', 'g', 'e'],
    obj3: ['r', 'b', 'c'],
    obj4: ['g', 'hh', 'e']
}

let result: any = [];
let exist: any = {}


for (let i in objectList) {
    for (let val of objectList[i]) {
        if (!result.includes(val)) {
            result.push(val)
        }
    }
}

console.log(result)
