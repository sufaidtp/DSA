class queue {
    constructor() {
        this.pushStack = []
        this.popStack = []
    }

    enqueue(value) {
        this.pushStack.push(value)
        return true
    }
    dequeue() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop())
            }

        }
        return this.popStack.pop()
    }
    display() {
        return [this.pushStack, this.popStack]
    }
}

const newQueue = new queue()
newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(30)
newQueue.enqueue(40)
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());

