const MAX_VALUE = 16;

class SNode{
    // 双重赋值，这样在没有参数的情况下就可以不用传递{}了
    constructor({
        data = -1,
        // maxLevel属性表明了当前节点处于整个跳表索引的级数
        maxLevel = 0,
        refer = new Array(MAX_VALUE)
    } = {}){
        this.data = data;
        this.maxLevel = maxLevel;
        this.refer = refer;
    }
}

class SkipList{
    constructor(){
        this.head = new SNode();
        this.levelCount = 1;
    }
    // 随机生成一个level  这么写是为了保证再添加元素时每一级索引节点的数量能够是上一级索引节点的2倍
    randomLevel(){
        let level = 1;
        for(let i=1;i<MAX_VALUE;i++){
            if(Math.random()<0.5){
                level++;
            }
        }
        return level;
    }

    insert(val){
        if(val === null || val === undefined){return -1}
        const level = this.randomLevel();
        const newNode = new Node();
        newNode.data = val;
        newNode.maxLevel = level;
        const update = new Array(level).fill(new Node());
        let p = this.head;
        for(let i = level-1;i>=0;i--){
            while(p.refer[i] !== undefined && p.refer[i].data<val){
                p=p.refer[i];
            }
            update[i] = p;
        }
        for(let i=0;i<level;i++){
            newNode.refer[i] = update[i].refer[i];
            update[i].refer[i] = newNode;
        }
        if(this.levelCount<level){
            this.levelCount = level;
        }
    }

    find(val){
        if(val === null || val === undefined){return -1}
        let p = this.head;
        for(let i=this.levelCount-1;i>=0;i--){
            while(p.refer[i] !== undefined && p.refer[i].data<val){
                p=p.refer[i];
            }
        }

        if(p.refer[0] !== undefined && p.refer[0].data === val){
            return p.refer[0];
        }

        return -1;
    }

    remove(val){
        if(val === null || val === undefined){return -1}
        let _node;
        let p = this.head;
        const update = new Array();
        for(let i = this.levelCount-1;i>=0;i--){
            while(p.refer[i]!==undefined && p.refer[i].data<val){
                p=p.refer[i];
            }
            update[i]=p;
        }

        if(p.refer[0] !== undefined && p.refer[0].data === val){
            _node = p.refer[0].data;
            for(let i=0;i<this.levelCount;i++){
                if(update[i].refer[i] !== undefined && update[i].refer[i].data === val){
                    update[i].refer[i] = update[i].refer[i].refer[i];
                }
            }
            return _node;
        }

        return -1;
    }
}
