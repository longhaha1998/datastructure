class HeapSort{
    constructor(arr=[]){
        this.store = [null].concat(arr);
        for(let i = Math.floor(this.store.length/2);i>=1;i--){
            this.heapfy(i);
        }
    }

    heapfy(index){
        while(true){
            let maxIndex = index;
            if(this.store[index*2] && this.store[index] < this.store[index*2]){
                maxIndex = index*2;
            }
            if(this.store[(index*2)+1] && this.store[maxIndex] < this.store[(index*2)+1]){
                maxIndex = (index*2)+1;
            }
            if(maxIndex === index){
                break;
            }
            [this.store[index], this.store[maxIndex]] = [this.store[maxIndex], this.store[index]];
            index = maxIndex;
        }
    }

    sort(){
        let result = [];
        for(let i=this.store.length-1;i>1;i--){
            [this.store[i], this.store[1]] = [this.store[1],this.store[i]];
            result.unshift(this.store.pop());
            this.heapfy(1);
        }
        this.store = [null, ...result];
    }
}

class HeapSort2{
    constructor(arr){
        this.store = [null].concat(arr);
        this.buildHeap();
    }

    buildHeap () {
        let startIndex = Math.floor(this.store.length/2);
        for (let i = startIndex; i>=1 ; i-- ) {
            this.heapfy(this.store, this.store.length, i);
        }
    }

    heapfy (arr, len, index) {
        while (true) {
            let maxIndex = index;
            if (index*2<len && arr[index*2]>arr[index]) {
                maxIndex = index*2;
            }
            if ((index*2)+1<len && arr[(index*2)+1]>arr[maxIndex]) {
                maxIndex = (index*2)+1;
            }
            if(maxIndex === index){
                break;
            }
            [arr[index], arr[maxIndex]] = [arr[maxIndex], arr[index]];
            index = maxIndex;
        }
    }

    heapSort(){
        for (let i=this.store.length-1; i>1; i--) {
            [this.store[1], this.store[i]] = [this.store[i], this.store[1]];
            this.heapfy(this.store, i,1);
        }
    }
}
