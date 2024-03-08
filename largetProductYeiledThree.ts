let arr = [10, -3, 5, 13, 29, 221, 8594, 233];


function computeProduct(arr: any) {

    let sortArr: any = arr.sort();
    let arrayLength: any = sortArr.length - 1;


    console.log(sortArr);

    let product1 = 1;

    for (let x = arrayLength; x > arrayLength - 3; x--) {
        product1 = product1 *  +sortArr[x];
    }
    console.log(product1)


    let product2 = sortArr[0] * sortArr[1] * sortArr[arrayLength]
    console.log(product1, product2)

}

computeProduct(arr)
