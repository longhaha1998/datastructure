class ListStack{
    constructor(){
        this.top = null;
    }

    push (ele) {
        let newNode = new Node(ele);
        if  (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop () {
        if (this.top === null) {
            return false;
        }
        let value = this.top.element;
        this.top = this.top.next;
        return value;
    }

    clear () {
        this.top = null;
    }
}