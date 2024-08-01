

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null
    }

    
    pop(){
        if(this.top==null){
            console.log("underflow");
            return
        }
            this.top=this.top.next
        
    }


    display(){
        let temp=this.top
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next
        }
    }
}

const newstack=new stack()

newstack.push(10)
newstack.push(101)
newstack.push(103)
newstack.pop()
newstack.display()