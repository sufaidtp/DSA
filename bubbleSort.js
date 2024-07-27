let arr = [1, 8, 4, 9, 7, 2, 5]

function bubbleSort(arr) {
    for (i = arr.length - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }
        }
    }
    return arr
}
console.log(bubbleSort(arr));