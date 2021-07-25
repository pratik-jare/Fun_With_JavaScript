function find_leap(year) {
    if (year % 400 == 0) {
        return true;
    } else if ((year % 4 == 0) && (year % 100 != 0)) {
        return true;
    } else {
        return false;
    }
}

find_leap(2000);
find_leap(1990);


function day_switch(day) {
    switch (day) {
        case '1': console.log('Monday'); break;
        case '2': console.log('Tuesday'); break;
        case '3': console.log('Wednesday'); break;
        case '4': console.log('Thursday'); break;
        case '5': console.log('Friday'); break;
        case '6': console.log('Saturday'); break;
        case '7': console.log('Sunday'); break;
        default: console.log('no day'); break;

    }
}

day_switch('1');
day_switch('2');


var i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}


for(var i =1 ; i<= 10; i++) {
    console.log(i);
}


