let arr=[1,56,5,6,5,5,6,656]

function linerSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return-1
}

console.log(linerSearch(arr,5));