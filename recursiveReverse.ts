let str = 'abcdefg';
let numStr = 1234422;

function recRev(str: any): any {
    if (str == '') {
        return '';
    } else {
        let lastIndex = str.length - 1;
        return str[lastIndex] + recRev(str.substring(0, lastIndex));
    }
}


console.log(recRev(numStr.toString()))
