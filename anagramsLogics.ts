let str = 'slaorrs';
let str2 = 'srraosl';


console.log(checkAnagramBySorting())

function checkAnagramBySorting() {
    console.log(str.toLocaleLowerCase().split('').sort().join(''), str2.toLocaleLowerCase().split('').sort().join(''))
    return str.toLocaleLowerCase().split('').sort().join('') == str2.toLocaleLowerCase().split('').sort().join('');
}


checkAnagramCustom();

function checkAnagramCustom() {
    let exist: any = {};
    let resultFlag = false;

    if (str.length !== str2.length) {
        console.log('not anagram');
        return
    }

    for (let i = 0; i < str.length; i++) {
        if (exist[str[i].toLocaleLowerCase()]) {
            exist[str[i]]++;
        } else {
            exist[str[i].toLocaleLowerCase()] = 1;
        }
    }

    for (let i in exist) {
        if (!str2.toLocaleLowerCase().includes(i)) {
            console.log('not anagram')
            break;
        }
    }
    console.log('anagram')

}

console.log(
checkAnagramsPalindrom(str))

function checkAnagramsPalindrom(str:any) {
    let exist: any = {};
    let resultFlag = false;


    for (let i = 0; i < str.length; i++) {
        if (exist[str[i].toLocaleLowerCase()]) {
            exist[str[i]]++;
        } else {
            exist[str[i].toLocaleLowerCase()] = 1;
        }
    }

    let oddCnt = 0;

    for (let i in exist) {
        if (exist[i] % 2 !== 0) {
            oddCnt++
        }
    }


    if ((str.length % 2 == 0 && oddCnt == 0) || (str.length % 2 !== 0 && oddCnt == 1)) {
        return true
    } else {
        return false
    }

}



