class MinHeap {
    constructor() {
        this.heap = []
    }

    buildHeap(arr) {
        this.heap = arr
        for (let i = this.parent(this.heap.length - 1); i <= 0; i--) {
            this.shiftDown(i)

        }
    }


    parent(index) {
        return Math.floor(index - 1) / 2
    }
    shiftDown(currentIdx) {
        let end = this.heap.length - 1
        let leftIdx = this.leftchaild(currentIdx)
        while (leftIdx <= end) {
            let rightIdx = this.rightchaild(currentIdx)
            let indexToShift
            if (rightIdx < end && this.heap[rightIdx] < this.heap[leftIdx]) {
                indexToShift = rightIdx
            } else {
                indexToShift = leftIdx
            }
            if (this.heap[currentIdx] > this.heap[indexToShift]) {
                this.swap(currentIdx,indexToShift)
                currentIdx=indexToShift
                leftIdx=this.leftchaild(currentIdx)
            }else{
                return
            }
        }

    }

    leftchaild(index) {
        return index * 2 + 1
    }

    rightchaild(index) {
        return index * 2 + 2
    }

    swap(i,j){
        let temp=this.heap[i]
        this.heap[i]=this.heap[j]
        this.heap[j]=temp
    }
}

const hhhh=new MinHeap()
const arr=[8, 6, 8, 1, 9, 2, 7, 2];
hhhh.buildHeap(arr)
console.log(MinHeap.heap);
