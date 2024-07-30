let array = [5, 6, 7, 9, 3, 10]





function quickSort(array, startIndx, endIndx) {
    if (startIndx >= endIndx) {
        return
    }

    let pivot = startIndx
    let leftIdx = startIndx + 1
    let rightIdx = endIndx

    while (leftIdx<=rightIdx){
    if(array[leftIdx] > array[pivot] && array[pivot] > array[rightIdx]) {
        swap(array,rightIdx, leftIdx)
        leftIdx++
        rightIdx--

    }
    if (array[pivot] >= array[leftIdx]) {
        leftIdx++
    }
    if (array[pivot] <= array[rightIdx]) {
        rightIdx--
    }
}

    swap(array, pivot, rightIdx)

    quickSort(array, startIndx, rightIdx - 1)
    quickSort(array, rightIdx + 1, endIndx)

    function swap(array, i, j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp

    }
    return array

}

console.log(quickSort(array, 0, array.length - 1));     


// ===============================or==========================



function quickSort(arr){
    if( arr.length < 1 ) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  arr.forEach((val)=>{
    if(val<pivot) left.push(val);
    if(val>pivot) right.push(val)
  })
  return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort( [5, 6, 7, 9, 3, 10]));



