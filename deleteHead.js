// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Slinkedlist {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }

//     addNode(data) {
//         const newNode = new Node(data)
//         if (this.head == null) {
//             this.head = newNode
//         } else {
//             this.tail.next = newNode
//         }
//         this.tail = newNode
//     }

//     delete(data) {

//         let prev=null
//         let current=this.head
//         if(current.data==data){
//             this.head=this.head.next
//             return
//         }

//         while(current!=null){
//             if(current.data==data){
//                 prev.next=current.next
//                 break;
//             }
//             prev=current
//             current=current.next

//         }
//     }



//     display() {
//         let temp = this.head
//         while (temp != null) {
//             console.log(temp.data);
//             temp = temp.next
//         }
//     }
// }

// const list = new Slinkedlist()
// list.addNode(1)
// list.addNode(2)
// list.addNode(3)
// list.delete(3)
// list.display()


class Node {
    constructor(data) {
        this.data = data
        this.next = null

    }
}

class Slinkedlist {
    constructor() {
        this.head = null
        this.tail = this.tail
    }

    addNode(data) {
        const newnode = new Node(data)
        if (this.head == null) {
            this.head = newnode
        } else {
            this.tail.next = newnode
        }
        this.tail = newnode
    }


    delete(data) {
        let current = this.head
        let prev = null
        if (current.data == data) {
            this.head = this.head.next
            return

        }
        while (current != null) {
            if (current.data == data) {
                prev.next = current.next
                break;
            }
            prev = current
            current = current.next

        }
    }

    display() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next
        }
    }


}

const list = new Slinkedlist()
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)
list.delete(40)
list.display()