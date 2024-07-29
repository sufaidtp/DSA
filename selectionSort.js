let arr = [15, 2, 9, 7, 5, 2]

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex!==i){
            let temp=arr[i]
            arr[i]=arr[minIndex]
            arr[minIndex]=temp

        }
    }
    return arr
}
console.log(selectionSort(arr));