let arr1 = [2, 3, 4, 1, 4, 2, 5];
let arr2 = [4, 7, 8, 2, 5, 7];

function findInterSectionOfArrays() {

    let exists: any = {};
    let result: number[] = [];

    arr1.forEach((ele: number) => {
        if (!exists[ele]) {
            exists[ele] = true;
        }
    })
            console.log(exists)

 for(let i in exists) { 
    if(arr2.includes(+i)) {
result.push(+i)
    }
 }

 console.log(result) // 2,4,5

}

findInterSectionOfArrays()
