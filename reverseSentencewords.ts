let str = 'I Am doing good, thank you.';

function reverseSentencewords(str: any) {
    let arr = str.split(' ');


    arr = arr.map((ele: any) => {
        return ele.split('').reverse().join('');
    })

    console.log(arr)

    let result = arr.join(' ')

    console.log(result)

}

reverseWordsOnly(str);

function reverse(str: any) {
    let result: any = [];

    for (let i = str.length - 1, j = 0; i >= 0 && j <= str.length; i--, j++) {
        result[j] = str[i];
    }

    console.log(result.join(''))

    return result
}


function reverseWordsOnly(str:any) {
let strArr = str.split(' ').reverse().join(' ')
console.log(strArr)
}
