let arr = [3, 5, 5, 7, 7, 4, 7, 5, 8, 6, 8, 7];

removeDuplicates(arr);

function removeDuplicates(arr: any) {

    let result: any[] = [];

    arr.forEach((ele: any) => {
        console.log(ele)
        if (!result.includes(ele)) {
            result.push(ele)
        }
    })

    console.log(result)


}
