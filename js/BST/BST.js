class TNode{
    constructor(data = -1){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// 当二叉查找树中有重复的值的时候，有两种解决办法，一种是把他当做大于相同值节点继续向右边节点插入，另一种是在每个节点的data上用数组来存储数据
// 相同值节点继续往右插入
class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new TNode(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;
            let parent;
            while(true){
                parent = current;
                if(data<current.data){
                    current = current.left;
                    if(current === null){
                        parent.left = newNode;
                        return
                    }
                }else{
                    current = current.right;
                    if(current === null){
                        parent.right = newNode;
                        return;
                    }
                }
            }
        }
    }

    find(data){
        let result = [];
        let current = this.root;

        while(current !== null){
            if(current.data === data){
                result.push(current);
                current = current.right;
            }else if(current.data<data){
                current = current.left;
            }else{
                current = current.right;
            }
        }

        if(result.length === 0){
            return -1;
        }else if(result.length === 1){
            return result[0];
        }else{
            return result;
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data);
    }
    // 不考虑有重复的节点
    // removeNode(node, data){
    //     if(node === null){
    //         return null;
    //     }

    //     if(node.data === data){
    //         if(node.left === null && node.right === null){
    //             return null;
    //         }
    //         if(node.left === null){
    //             return node.right;
    //         }
    //         if(node.right === null){
    //             return node.left;
    //         }
    //         let tempNode = this.findMin(node.right);
    //         node.data = tempNode.data;
    //         node.right = this.removeNode(node.right, tempNode.data);
    //         return node;
    //     }else if(node.data<data){
    //         node.right = this.removeNode(node.right, data);
    //         return node;
    //     }else{
    //         node.left = this.removeNode(node.left, data);
    //         return node;
    //     }
    // }

    removeNode(node, data){
        if(node === null){
            return null;
        }
        if(node.data === data){
            if(node.left === null && node.right === null){
                return null;
            }
            if(node.left === null){
                node.right = this.removeNode(node.right, data);
                return node.right;
            }
            if(node.right === null){
                return node.left;
            }
            let tempNode = this.findMin(node.right);
            if(tempNode.data === data){
                node.right = this.removeNode(node.right, data);
                node = this.removeNode(node, data);
                return node;
            }else{
                node.data = tempNode.data;
                node.right = this.removeNode(node.right, tempNode.data);
                node.right = this.removeNode(node.right, data);
                return node;
            }
        }else if(node.data<data){
            node.right = this.removeNode(node.right, data);
            return node;
        }else{
            node.left = this.removeNode(node.left, data);
            return node;
        }
    }

    findMin(){
        let current = this.root;
        while(current !== null && current.left !== null){
            current = current.left;
        }
        return current?current:-1;
    }

    findMax(){
        let current = this.root;
        while(current !== null && current.right !== null){
            current = current.right;
        }
        return current?current:-1;
    }

    inOrder(node){
        if(node !== null){
            return [...this.inOrder(node.left), node.data, ...this.inOrder(node.right)]
        }else{
            return [];
        }
    }

    preOrder(node){
        if(node === null){
            return [node, ...this.preOrder(node.left), ...this.preOrder(node.right)];
        }else{
            return [];
        }
    }

    lastOrder(node){
        if(node === null){
            return [...this.lastOrder(node.left), ...this.lastOrder(node.right), node];
        }else{
            return [];
        }
    }

    getHeight(node){
        if(node === null){
            return -1;
        }
        if(node.right === null && node.left === null){
            return 0;
        }
        return Math.max(this.getHeight(node.left), this.getHeight(node.right))+1;
    }
}
