class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)
        let currentnode = this.root
        if (currentnode == null) {
            this.root = newNode
            return
        }
        while (true) {
            if (data < currentnode.data) {
                if (currentnode.left == null) {
                    currentnode.left = newNode
                    break
                } else {
                    currentnode = currentnode.left
                }
            } else {
                if (currentnode.right == null) {
                    currentnode.right = newNode
                    break
                } else {
                    currentnode = currentnode.right
                }
            }
        }
    }

    contain(data) {
        let currentnode = this.root
        while (currentnode != null) {
            if (data < currentnode.data) {
                currentnode = currentnode.left
            } else if (data > currentnode.data) {
                currentnode = currentnode.right
            } else {
                return true
            }

        }
        return false
    }
    remove(data) {
        this.removeValue(data, this.root, null)
    }
    removeValue(data, currentnode, parentNode) {
        while (currentnode != null) {
            if (data < currentnode.data) {
                parentNode = currentnode
                currentnode = currentnode.left
            } else if (data > currentnode.data) {
                parentNode = currentnode
                currentnode = currentnode.right
            } else {
                if (currentnode.left != null && currentnode.right != null) {
                    currentnode.data = this.getminvalue(currentnode.right)
                    this.removeValue(currentnode.data, currentnode.right, currentnode)

                } else {
                    if (parentNode == null) {
                        if (currentnode.right == null) {
                            this.root = currentnode.left
                        } else {
                            this.root = currentnode.right
                        }
                    } else {
                        if (parentNode.left == currentnode) {
                            if (currentnode.right == null) {
                                parentNode.left = currentnode.left
                            } else {
                                parentNode.left = currentnode.right
                            }
                        } else {
                            if (currentnode.right == null) {
                                parentNode.right = currentnode.left
                            } else {
                                parentNode.right = currentnode.right
                            }
                        }
                    }
                }
                break;
            }
        }
    }
    getminvalue(currentnode) {
        if (currentnode.left == null) {
            return currentnode.data
        } else {
            return this.getminvalue(currentnode.left)
        }
    }
    getminValue(currentnode) {
        if (currentnode.left == null) {
            return currentnode.data
        } else {
            return this.getminValue(currentnode.left)
        }

    }
    inOrder(){
        this.inOrdervalue(this.root)
    }
    inOrdervalue(node){
        if(node!=null){
            this.inOrdervalue(node.left)
            console.log(node.data);
            this.inOrdervalue(node.right)
            
        }
    }
    preOrder(){
        this.preOrderValue(this.root)
    }
    preOrderValue(node){
        if(node!=null){
        console.log(node.data);
        this.preOrderValue(node.left)
        this.preOrderValue(node.right)
        
    }
}
    postOrder(){
        this.postOrderValue(this.root)
    }
    postOrderValue(node){
        if(node!=null){
            this.postOrderValue(node.left)
            this.postOrderValue(node.right)
            console.log(node.data);
            
        }
    }
}

const nBST = new BST()
nBST.insert(10)
nBST.insert(5)
nBST.insert(8)
nBST.insert(11)
// nBST.remove(11)
// console.log(nBST.contain(5));
// nBST.inOrder()
// nBST.preOrder()
nBST.postOrder()
