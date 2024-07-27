let arr=[1,2,3,4,5]

function binarySearch(arr,target){
    let start=0
    let end=arr.length-1
    while(start<=end){
        let middle=Math.floor((start+end)/2)
        console.log(middle);

        if(arr[middle]==target){
            return middle
        }else if(arr[middle]>target){
            end=middle-1
            
        }else if(arr[middle]<target){
            start=middle+1
        }
    }
    return-1
}

console.log(binarySearch(arr,3));