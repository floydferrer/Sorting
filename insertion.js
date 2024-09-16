function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j > 0; j--) {
            let temp;
            if(arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1]
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

// insertionSort([4, 20, 12, 10, 7, 9])

module.exports = insertionSort;