class Node{


   constructor(data){
        this.data=data
        this.next=null

}
}
class Slinkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }

    addNode(data){
        const newNode=new Node(data)
            if(this.head==null){
                this.head=newNode

            
        }else{
            this.tail.next=newNode

        }this.tail=newNode
    }

middlle(){
    let slow=this.head
    let fast=this.head

    while(fast.next && fast.next.next){
        slow=slow.next
        fast=fast.next.next
        
    }
    return slow
}
display(){
    let temp=this.head
    while(temp!=null){
        console.log(temp.data);
        temp=temp.next
    } 
}
}
const list=new Slinkedlist()
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)
console.log(list.middlle());

