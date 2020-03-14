// 利用heap实现优先级队列
class HeapNode{
    constructor(sortNum = 0, data){
        this.sortNum = sortNum;
        this.data = data;
    }
}

class Heap{
    constructor(arr){
        this.store = [null, ...arr];
        for(let i=Math.floor(this.store.length/2);i>=1;i--){
            this.heapfy(i);
        }
    }

    // 根据优先级sortNum从index往下堆化
    heapfy(index){
        while(true){
            let maxIndex = index;
            if(this.store[index*2] && this.store[index].sortNum<this.store[index*2].sortNum){
                maxIndex = index*2;
            }
            if(this.store[index*2 + 1] && this.store[maxIndex].sortNum < this.store[(index*2)+1].sortNum){
                maxIndex = (index*2)+1;
            }
            if(maxIndex === index){
                break;
            }
            [this.store[index], this.store[maxIndex]] = [this.store[maxIndex], this.store[index]];
            index = maxIndex;
        }
    }

    insert(node){
        this.store.push(node);
        let son = this.store.length-1;
        let parent = Math.floor(son/2);
        // 自下而上堆化
        while(parent>0 && this.store[parent].sortNum < this.store[son].sortNum){
            [this.store[son], this.store[parent]] = [this.store[parent], this.store[son]];
            son = parent;
            parent = Math.floor(son/2);
        }
    }

    getMax(){
        if(this.store.length<=1){
            return null;
        }
        [this.store[1], this.store[this.store.length-1]] = [this.store[this.store.length-1], this.store[1]];
        let result = this.store.pop();
        this.heapfy(1);
        return result;
    }
}