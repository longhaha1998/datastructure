class CircularQueueOnList{
    constructor(n){
        this.length = n;
        this.dataStore = new Array(n);
        this.head = 0;
        this.tail = 0;
    }

    enqueue(val){
        if((this.tail+1)%n === this.head) {
            return -1;
        }
        this.dataStore[this.tail] = val;
        this.tail = (this.tail+1)%this.length;
    }

    dequeue(){
        if(this.head === this.tail){
            return -1;
        }
        let value = this.dataStore(this.head);
        this.head = (this.head+1)%this.length;
        return value;
    }
}