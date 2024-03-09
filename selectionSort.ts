let arr = [3, 5, 7, 2, 7, 36, 7, 22, 63, 64];


sortArr()

function sortArr() {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let minIndex = i

        for (let j = 1; j < n; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if(minIndex !== i) {
            const temp =arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp
        }
        
    }
    console.log(arr)
}


