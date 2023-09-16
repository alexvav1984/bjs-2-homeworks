function getArrayParams(...arr) {
    let min = arr[0], max = arr[0], sum = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return { min: min, max: max, avg: +avg.toFixed(2) };
}


function summElementsWorker(...arr) {
    if ( arr.length == 0 ) {
        return 0;
    } else {
    let min = arr[0], max = arr[0], sum = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    return sum;
}
}

function differenceMaxMinWorker(...arr){
    if ( arr.length == 0 ) {
        return 0;
    } else {
    return Math.max(...arr) - Math.min(...arr);
}
}

function differenceEvenOddWorker(...arr){
    if ( arr.length == 0 ) {
        return 0;
    } else {
    let sumEvenElement = 0, sumOddElement = 0;
    for (i =0; i<arr.length; i++){
        if (arr[i] % 2 ==0){
            sumEvenElement += arr[i];
        }
        else{
            sumOddElement += arr[i];
        }
    }
    return sumEvenElement-sumOddElement;
}
}

function averageEvenElementsWorker(...arr){
    if ( arr.length == 0 ) {
        return 0;
    } else {
    let sumEvenElement = 0, countEvenElement = 0;
    for (i =0; i<arr.length; i++){
        if (arr[i] % 2 ==0){
            sumEvenElement += arr[i];
            countEvenElement++;
        }}
        return sumEvenElement / countEvenElement;
    }
}

function makeWork (arrOfArr, func) {

}
