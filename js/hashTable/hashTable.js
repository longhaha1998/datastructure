// 最基本的hashTable
class SimpleHashTable{
    constructor(){
        this.table = [];
    }

    // 散列函数
    loadHashCode(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash += key.charCodeAt(i);
        }
        return hash%37;
    }

    put(key, value){
        this.table[this.loadHashCode(key)] = value;
    }
    
    get(key){
        return this.table[this.loadHashCode(key)];
    }

    remove(key){
        this.table[this.loadHashCode(key)] = undefined;
    }

    printAll(){
        return this.table;
    }
}

class HashTableBaseMap{
    constructor(){
        this.store = new Map();
    }

    //网上找的一个哈希函数
    hash(string){
        let hash = string.length;
        for(let i=0; i<string.length; i++){
            hash = ((hast<<5)^(hash>>27))^string.charCodeAt(i);
        }
        return hash & 0x7FFFFFFF;
    }

    // 是否产生碰撞
    isCrash(item){
        return Object.prototype.toString.call(item) === "[object Map]";
    }

    put(item){
        if(!item.key || typeof item.key !== "string"){
            return -1;
        }
        // map 不能用[]取值  只能用get
        let hash = this.hash(item.key);
        let crash = this.store.get(hash);
        if(crash){
            if(crash.key === item.key){
                this.store.set(hash, item);
                return;
            }

            if(!this.isCrash(crash)){
                this.store.set(hash, new Map());
                this.store.get(hash).set(crash.key, crash);
            }
            this.store.get(hash).set(item.key, item);
        }else{
            this.store.set(hash, item);
        }
    }

    get(key){
        let hash = this.hash(key);
        let value = this.store.get(hash);
        if(this.isCrash(value)){
            return value.get(key);
        }else{
            return value;
        }
    }

    remove(key){
        let hash = this.hash(key);
        let value = this.store.get(hash);
        if(!value){
            return -1;
        }
        if(this.isCrash(value)){
            value.delete(key);
        }else{
            this.store.delete(key);
        }
    }

    clear(){
        this.store = new Map();
    }

    printAll(){
        let result = [];
        this.store.forEach(ele => {
            if(this.isCrash(ele)){
                ele.forEach(e => {
                    result.push(e);
                });
            }else{
                result.push(ele);
            }
        });
        return result;
    }
}