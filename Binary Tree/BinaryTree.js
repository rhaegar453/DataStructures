const Node=require('./Node');

class BinaryTree{
    constructor(){
        this.root=null;
    }

    /* Insert */
    addNode(data){
        let newNode=new Node(data);
        if(this.root==null){
            this.root=newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }
    /* Insert node */
    insertNode(node, newNode){
        if(newNode.data<node.data){
            if(node.left==null){
                node.left=newNode;
            }
            else{
                this.insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right==null){
                node.right=newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    /* Get root node */
    getRootNode(){
        return this.root;
    }

    search(data){
        if(node==null){
            return null;
        }
        else if(data< node.data){
            return this.search(node.left, data);
        }
        else if(data>node.data){
            return this.search(node.right, data);
        }
        else return node;
    }

    /* Removing a node */
    remove(data){
        this.root=this.removeNode(this.root, data);
    }

    findMinNode(node){
        if(node.left==null)return node;
        return this.findMinNode(node.left);
    }

    removeNode(node, key){
        if(node==null){
            return null;
        }
        else if(key<node.left){
            node.left=this.removeNode(node.left, key);
            return node;
        }
        else if(key>node.right){
            node.right=this.removeNode(node.right, key);
            return node;
        }
        else{
            /* Deleting a node with no children */
            if(node.left==null && node.right==null){
                node=null;
                return node;
            }
            /* Deleting a node with one child */
            if(node.left==null){
                node=node.right;
                return node;
            }
            else if(node.right==null){
                node=node.left;
                return node;
            }
            /* Deleting node with two children minimum node of right subtree is Stored in aux */
            let aux=this.findMinNode(node.right);
            node.data=aux.data;
            node.right=this.removeNode(node.right, aux.data);
            return node;
        }
    }

}