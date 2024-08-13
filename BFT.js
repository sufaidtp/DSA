class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        let currentnode = this.root;
        if (currentnode == null) {
            this.root = newNode;
            return;
        }
        while (true) {
            if (data < currentnode.data) {
                if (currentnode.left == null) {
                    currentnode.left = newNode;
                    break;
                } else {
                    currentnode = currentnode.left;
                }
            } else {
                if (currentnode.right == null) {
                    currentnode.right = newNode;
                    break;
                } else {
                    currentnode = currentnode.right;
                }
            }
        }
    }

    contain(data) {
        let currentnode = this.root;
        while (currentnode != null) {
            if (data < currentnode.data) {
                currentnode = currentnode.left;
            } else if (data > currentnode.data) {
                currentnode = currentnode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    inOrder() {
        this.inOrderValue(this.root);
    }

    inOrderValue(node) {
        if (node != null) {
            this.inOrderValue(node.left);
            console.log(node.data);
            this.inOrderValue(node.right);
        }
    }

    // Breadth-First Traversal (BFT)
   bft(){
    if(this.root==null){
        return
    }
    const queue=[this.root]
    while(queue.length>0){
        let currentnode=queue.shift()
        console.log(currentnode.data);

        if(currentnode.left!=null){
            queue.push(currentnode.left)
        }if(currentnode.right!=null){
            queue.push(currentnode.right)
        }

        
    }
   }
}

const newBST = new BST();
newBST.insert(5);
newBST.insert(8);
newBST.insert(45);
newBST.insert(9);
newBST.insert(4);
newBST.insert(11);

console.log("In-Order Traversal:");
newBST.inOrder();

console.log("Breadth-First Traversal:");
newBST.bft();
