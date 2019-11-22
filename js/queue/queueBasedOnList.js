class QueueBasedOnList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(val){
        if(this.head == null){
            this.head = new Node(val);
            this.tail = this.head;
        }else{
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
        }
    }

    dequeue(){
        if (this.head !== null) {
            let value = this.head.element;
            this.head = this.head.next;
            return value
        }else{
            return -1;
        }
    }
}

class CircularQueueOnList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(val){
        if (this.head === null) {
            this.head = new Node(val);
            this.head.next = this.head;
            this.tail = this.next;
        } else {
            this.tail.next = new Node(val);
            this.tail.next.next = this.head;
            this.tail = this.tail.next;
        }
    }

    dequeue(){
        if (this.head = this.tail) {
            let value = this.head.element;
            this.head = null;
            return value;
        } else {
            let value = this.head.element;
            this.tail.next = this.head.next;
            this.head = this.head.next;
            return value;
        }
    }
}