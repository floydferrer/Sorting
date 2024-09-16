function selectionSort(arr) {
    let min;
    let minIdx;
    let i = 0;
    while(i < arr.length) {
        min = arr[i];
        minIdx = i;
        let j = i + 1;
        while(j < arr.length) {
            if(arr[j] < min) {
                min = arr[j];
                minIdx = j;
            }
            j++;
            if(j === (arr.length)) {
                arr.splice(minIdx, 1)
                arr.splice(i, 0, min)
            }
        }
        i++;
    }
    console.log(arr)
    return arr;
}

// selectionSort(nums);

// selectionSort([4, 20, 12, 10, 7, 9])

module.exports = selectionSort;