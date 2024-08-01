

let arr = [1, 3, 5, 81, 4, 5, 10]

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr

    }

    let middle = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return join(left,right)

}


function join(left, right) {
    let newArr = []
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            newArr[k] = left[i]
            k++
            i++
        } else {
            
                newArr[k] = right[j]
                k++
                j++
            
        }
    }
    while (i <  left.length) {
        newArr[k] = left[i]
        k++
        i++
    }
    while (j < right.length) {
        newArr[k] = right[j]
        k++
        j++
    }

    return newArr

}

console.log(mergeSort(arr));
