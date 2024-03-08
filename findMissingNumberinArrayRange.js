let arr = [3, 5, 15, 6, 9, 10, 14, 8, 7];

findMissing(arr);

function findMissing(arr: any) {
    let sortArr = arr.sort((a:any,b:any)=> a-b);
    let missingValues = [];
    console.log(sortArr)

    for (let i = sortArr[0]; i <= sortArr[sortArr.length - 1]; i++) {
        console.log(i)
        if (!sortArr.includes(i)) {
            missingValues.push(i)
        }
    }

    console.log(missingValues)
}
