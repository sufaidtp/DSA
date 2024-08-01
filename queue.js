class Node{
    constructor(data){
        this.data=data
        this.next=null
    }

}
class queue{
    constructor(){
        this.front=null
        this.rear=null
    }

    enqueue(data){
        const newNode=new Node(data)
        if(this.rear==null){
            this.front=this.rear=newNode
        }
        this.rear.next=newNode
        this.rear=newNode

        
    }
    dequeue(){
        if(this.front==null){
            console.log("empty");
        }
        this.front=this.front.next
        if(this.front==null){
            this.rear=null
        }
    }
    display(){
        let temp=this.front
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next
        }
    }
}

const newQueue=new queue()
newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(30)
newQueue.enqueue(40)
newQueue.dequeue()
newQueue.display()



