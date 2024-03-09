let arr = [3, 5, 7, 2, 7, 36, 7, 22, 63, 64];


sortArr() 

function sortArr() {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }


        }
    }
    console.log(arr)
}


