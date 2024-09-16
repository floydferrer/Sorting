function getDigit(num, digit) {
    const numStr = String(num).charAt(String(num).length - 1 - digit);
    return Number(numStr)
}

function digitCount(num) {
    return String(num).length;
}

function mostDigits(arr) {
    let count = 0;
    for(let el of arr) {
        const numDigits = digitCount(el)
        if(numDigits > count) count = String(el).length
    }
    return count;
}

function radixSort(arr) {
    const numArr = [[], [], [], [], [], [], [], [], [], []]

    let i = 0;
    let count = mostDigits(arr);

    while(i < count) {
        while(arr.length > 0) {
            const digit = getDigit(arr[0], i);
            numArr[digit].push(arr.shift())
        }
        for (el of numArr) {
            while(el.length > 0) {
                arr.push(el.shift())
            }
        }
        i++;
    }
    return arr;
}

module.exports = {getDigit, digitCount, mostDigits, radixSort};