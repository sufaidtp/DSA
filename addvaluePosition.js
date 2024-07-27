// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// class Slinkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }


// addNode(data){
//     const newNode=new Node(data)
//     if(this.head==null){
//         this.head=newNode

//     }else{
//         this.tail.next=newNode
//     }
//     this.tail=newNode


// }






// insertAdd(data,postion){
//     let temp =this.head
//    let i=0
//     let pervece=null

//     while(temp!=null){
//         if(i==postion){
//             break
//         }
//         pervece=temp
//         temp=temp.next
//         i++
       
       

//     }

//     const newNode=new Node(data)
//     pervece.next=newNode
//     newNode.next=temp
// }



// display(){
//     let temp=this.head
//     while(temp!=null){
//         console.log(temp.data);
//         temp=temp.next
//     }
// }
// }

// const list=new Slinkedlist()
// list.addNode(10)
// list.addNode(20)
// list.addNode(30)
// list.addNode(40)


// list.insertAdd(10,5)
// list.display()

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
    insertAdd(data,postion){
            let temp =this.head
           let i=0
            let pervece=null
           
        
            while(temp!=null){
                if(i==postion){
                    break
                }
                pervece=temp
                temp=temp.next
                i++
               
               
        
            }
        
            const newNode=new Node(data)
            pervece.next=newNode
            newNode.next=temp
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
list.insertAdd(5,0)
list.display()

