class CircleListNode{
    constructor(ele){
        this.element = ele;
        this.next = null;
    }
}

class CircleLinkedList{
    constructor(){
        this.head = new CircleListNode("head");
        this.head.next = this.head;
        this.find = this.find.bind(this);
        this.insert = this.insert.bind(this);
        this.display = this.display.bind(this);
        this.findPres = this.findPres.bind(this);
        this.delete = this.delete.bind(this);
    }

    find(item){
        let currentNode = this.head;
        while(currentNode.element !== item){
            currentNode = currentNode.next;
            if (currentNode.element === "head") {
                currentNode = null;
                break;
            }
        }
        return currentNode;
    }

    insert(newElement, item){
        let newNode = new CircleListNode(newElement);
        let tempNode = this.find(item);
        if (tempNode !== null) {
            newNode.next = tempNode.next;
            tempNode.next = newNode;
        }
    }

    findPres(item){
        let currentNode = this.head;
        while(currentNode.next.element !== item){
            currentNode = currentNode.next;
            if (currentNode.element === "head") {
                currentNode = null;
                break;
            }
        }
        return currentNode;
    }

    delete(item){
        let tempNode = this.findPres(item);
        if (tempNode !== null) {
            tempNode.next = tempNode.next.next;
        }
    }

    display(){
        let currentNode = this.head.next;
        let result = [];
        while(currentNode.element !== "head"){
            result.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return result;
    }
}